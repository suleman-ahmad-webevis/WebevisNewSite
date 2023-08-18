import React, { forwardRef, useRef, useState, useEffect } from "react";
import { components } from "react-select";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import { wrapMenuList } from "react-select-async-paginate";
import Field, { StyledFormGroup, InputIcon } from "components/molecules/Field";
import Label from "components/atoms/Label";
import Error from "components/atoms/Error";
import { pluralize } from "helpers/pluralize";
import {
  BtnHolder,
  InputHolder,
  SearchBarHolder,
  StyledCreatableSelect,
  StyledSelect,
  StyledSelectAsync,
  StyledSelectAsyncPaginate,
} from "./Select.styles";

const { MenuList, ValueContainer, SingleValue, Placeholder } = components;

function DropdownIndicator(props) {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <InputIcon $suffix className="chevron-down-icon">
          <span className="ab-icons">chevron_down</span>
        </InputIcon>
      </components.DropdownIndicator>
    )
  );
}

function CustomMenuList({ selectProps, ...props }) {
  const { onInputChange, inputValue, onMenuInputFocus } = selectProps;

  // Copied from source
  const ariaAttributes = {
    "aria-autocomplete": "list",
    "aria-label": selectProps["aria-label"],
    "aria-labelledby": selectProps["aria-labelledby"],
  };

  // console.log('selectProps', selectProps);
  return (
    <div>
      <SearchBarHolder className="search-bar-holder">
        <Field
          prefix={<span className="ab-icons">search</span>}
          margin={0}
          size="sm"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          type="text"
          value={inputValue}
          onChange={(e) =>
            onInputChange(e.currentTarget.value, {
              action: "input-change",
            })
          }
          onMouseDown={(e) => {
            e.stopPropagation();
            e.target.focus();
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            e.target.focus();
          }}
          onFocus={onMenuInputFocus}
          placeholder="Search"
          {...ariaAttributes}
        />
      </SearchBarHolder>
      <MenuList {...props} selectProps={selectProps}>
        {props.children}
      </MenuList>
      {selectProps.appendButton && (
        <BtnHolder>{selectProps.appendButton}</BtnHolder>
      )}
    </div>
  );
}

const AsyncPaginateMenuList = wrapMenuList(CustomMenuList);

// Set custom `SingleValue` and `Placeholder` to keep them when searching
function CustomValueContainer({ children, selectProps, ...props }) {
  const commonProps = {
    cx: props.cx,
    clearValue: props.clearValue,
    getStyles: props.getStyles,
    getValue: props.getValue,
    hasValue: props.hasValue,
    isMulti: props.isMulti,
    isRtl: props.isRtl,
    options: props.options,
    getClassNames: props.getClassNames,
    selectOption: props.selectOption,
    setValue: props.setValue,
    selectProps,
    theme: props.theme,
  };

  // eslint-disable-next-line prefer-const
  let [values, input] = children;

  if (Array.isArray(values)) {
    if (typeof selectProps.showNoOfSelectedOptions === "boolean") {
      // 🔢 It's a count off! Showing the total selected items

      values = `${values.length} ${pluralize(
        selectProps.showNoOfSelectedText || "item",
        values.length
      )} selected`;
    } else {
      // ✌️ We're only showing a couple of selected options and then how many more there are.
      const visibleValues = values.slice(
        0,
        selectProps.showNoOfSelectedOptions
      );
      const hiddenValues = values.length - selectProps.showNoOfSelectedOptions;

      if (hiddenValues > 0) {
        values = [...visibleValues, `+ ${hiddenValues} more`];
      } else {
        values = visibleValues;
      }
    }
  }

  return (
    <ValueContainer {...props} selectProps={selectProps}>
      {!selectProps.showNoOfSelectedOptions ? (
        React.Children.map(
          children,
          (child) =>
            child ||
            (props.hasValue ? (
              <SingleValue
                {...commonProps}
                isFocused={selectProps.isFocused}
                isDisabled={selectProps.isDisabled}
              >
                {selectProps.getOptionLabel(props.getValue()[0])}
              </SingleValue>
            ) : (
              <Placeholder
                {...commonProps}
                key="placeholder"
                isDisabled={selectProps.isDisabled}
                data={props.getValue()}
              >
                {selectProps.placeholder}
              </Placeholder>
            ))
        )
      ) : (
        <>
          {values}
          {input}
        </>
      )}
    </ValueContainer>
  );
}

const Select = forwardRef(
  (
    {
      prefix,
      suffix,
      disabled,
      invalid,
      options,
      size,
      label,
      margin,
      error,
      rules,
      clear,
      async,
      simpleSearchSelect,
      creatable,
      withSearchBar,
      className,
      maxWidth,
      inline,
      labelWidth,
      showNoOfSelectedOptions,
      showNoOfSelectedText,
      appendButton,
      menuWidth,
      labelIcon,
      asyncCallBack,
      selectClassName,
      asyncPaginate,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const debouncedRef = useRef(0);
    const loadOptions = async (__) => {
      const _options = await new Promise((resolve) => {
        debounce((value) => {
          debouncedRef.current += 1;
          const LocalRef = debouncedRef.current;
          setTimeout(() => {
            if (LocalRef === debouncedRef.current) {
              resolve(asyncCallBack(value));
            }
          }, 300);
        }, 300)(__);
      });
      return _options;
    };

    const onDomClick = (e) => {
      if (containerRef.current != null) {
        const menu = containerRef.current.querySelector(".react-select__menu");

        if (
          !containerRef.current.contains(e.target) ||
          !menu ||
          !menu.contains(e.target)
        ) {
          setIsFocused(false);
          setInputValue("");
        }
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", onDomClick);

      return () => {
        document.removeEventListener("mousedown", onDomClick);
      };
    }, []);

    const selectProps = {
      ...props,
      simpleSearchSelect,
      $prefix: prefix,
      $suffix: suffix,
      error,
      ref,
      $size: size,
      classNamePrefix: "react-select",
      showNoOfSelectedOptions,
      showNoOfSelectedText,
      menuWidth,
      appendButton,
      disabled,
      isDisabled: disabled,
      className: selectClassName,
    };

    const selectComponents = {
      DropdownIndicator,
      IndicatorSeparator: () => null,
      ValueContainer: CustomValueContainer,
    };

    return (
      <StyledFormGroup
        $inline={inline}
        className={className}
        $margin={margin}
        $maxWidth={maxWidth}
      >
        {label && (
          <Label labelWidth={labelWidth} clear={clear} labelIcon={labelIcon}>
            {label}
          </Label>
        )}
        <InputHolder className={inline && "flex-grow-1"}>
          {prefix && (
            <InputIcon
              disabled={disabled}
              $prefix={prefix}
              invalid={invalid || error}
            >
              {prefix}
            </InputIcon>
          )}

          {asyncPaginate && (
            <div ref={containerRef} className={inline && "flex-grow-1"}>
              <StyledSelectAsyncPaginate
                {...selectProps}
                components={{
                  ...selectComponents,
                  MenuList: AsyncPaginateMenuList,
                }}
                inputValue={inputValue}
                isSearchable={false}
                onMenuInputFocus={() => setIsFocused(true)}
                // onChange={() => setIsFocused(false)}
                onInputChange={(val) => setInputValue(val)}
                {...{
                  menuIsOpen: isFocused || undefined,
                  isFocused: isFocused || undefined,
                }}
              />
            </div>
          )}

          {async && (
            <div ref={containerRef}>
              <StyledSelectAsync
                {...selectProps}
                components={{ ...selectComponents, MenuList: CustomMenuList }}
                loadOptions={loadOptions}
                onMenuInputFocus={() => setIsFocused(true)}
                // onChange={() => setIsFocused(false)}
                onInputChange={(val) => setInputValue(val)}
                {...{
                  menuIsOpen: isFocused || undefined,
                  isFocused: isFocused || undefined,
                }}
              />
            </div>
          )}

          {creatable && (
            <div ref={containerRef} className={inline && "flex-grow-1"}>
              <StyledCreatableSelect
                {...selectProps}
                components={{ ...selectComponents, MenuList: CustomMenuList }}
                options={options}
                inputValue={inputValue}
                isSearchable={false}
                onMenuInputFocus={() => setIsFocused(true)}
                // onChange={() => setIsFocused(false)}
                onInputChange={(val) => setInputValue(val)}
                {...{
                  menuIsOpen: isFocused || undefined,
                  isFocused: isFocused || undefined,
                }}
              />
            </div>
          )}

          {withSearchBar && (
            <div ref={containerRef} className={inline && "flex-grow-1"}>
              <StyledSelect
                {...selectProps}
                components={{ ...selectComponents, MenuList: CustomMenuList }}
                options={options}
                inputValue={inputValue}
                isSearchable={false}
                onMenuInputFocus={() => setIsFocused(true)}
                // onChange={() => setIsFocused(false)}
                onInputChange={(val) => setInputValue(val)}
                {...{
                  menuIsOpen: isFocused || undefined,
                  isFocused: isFocused || undefined,
                }}
              />
            </div>
          )}

          {!async && !creatable && !withSearchBar && !asyncPaginate && (
            <StyledSelect
              {...selectProps}
              components={{ ...selectComponents }}
              options={options}
              className={`${inline && "flex-grow-1"} ${selectClassName}`}
              onChange={(value) => {
                props?.onChange?.({
                  target: {
                    value,
                    name: props.name,
                  },
                });
              }}
            />
          )}

          {suffix && (
            <InputIcon
              disabled={disabled}
              $suffix={suffix}
              invalid={invalid || error}
            >
              {suffix}
            </InputIcon>
          )}

          {error && (
            <Error id={`${props.name}Error`} role="alert">
              {error}
            </Error>
          )}
        </InputHolder>
      </StyledFormGroup>
    );
  }
);

Select.displayName = "Select";

Select.propTypes = {
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  async: PropTypes.bool,
  simpleSearchSelect: PropTypes.bool,
  creatable: PropTypes.bool,
  withSearchBar: PropTypes.bool,
  className: PropTypes.string,
  maxWidth: PropTypes.number,
  appendButton: PropTypes.node,
  showNoOfSelectedOptions: PropTypes.bool,
  menuWidth: PropTypes.number,
};

export default Select;
