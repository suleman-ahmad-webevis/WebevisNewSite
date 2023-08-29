import React from "react";
import { useState } from "react";
import Select, { components } from "react-select";

const SelectField = ({ field, form, type, arr }) => {
  const predefinedColors = ["#434956"];
  const backgroundColors = [
    "#ADFFE8",
    "#FFEABC",
    "#F4FFAC",
    "#90E6FF",
    "#90E6FF",
  ];
  const optionWithRandomColors = arr.map((opt, index) => ({
    ...opt,
    color: predefinedColors[index % predefinedColors.length],
    backgroundColor: backgroundColors[index % backgroundColors.length],
    isSelected: false,
  }));
  console.log({ type, optionWithRandomColors });

  const defaultSelectedOption = optionWithRandomColors.find(
    ({ value }) => value === type
  );

  const colourStyles = {
    control: (styles, { isFocused, isSelected }) => ({
      ...styles,
      height: "48px",
      overflow: "auto",
      backgroundColor: "white",
      cursor: "pointer",
      borderColor: isFocused ? "#28B781" : "#D9D9D9",
      boxShadow: isFocused ? " 1px solid #28B781" : "none",
      padding: "5px",
      boxShadow:
        " 0px 0.9781021475791931px 2.9343066215515137px 0px rgba(0, 0, 0, 0.14)",
      "&:hover": {
        borderColor: "none",
      },
      ".css-1xc3v61-indicatorContainer": {
        transform: isSelected ? "rotateX(180deg)" : "rotateX(0deg)",
        transition: "transform 0.9s ease",
        span: {
          display: "none",
        },
      },
      ".css-1u9des2-indicatorSeparator": {
        display: "none",
      },
      ".css-qbdosj-Input": {
        display: "block",
        // height: isFocused ? "30px" : "0",
        padding: "0",
      },
      ".css-1xc3v61-indicatorContainer": {
        padding: "0",
      },
      ".css-15lsz6c-indicatorContainer": {
        padding: "0",
      },
    }),
    menu: (styles) => ({
      ...styles,
      maxHeight: "180px",
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: "180px",
      overflowY: "auto",
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: isSelected ? "white" : "black",
        padding: "10px",
      };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.backgroundColor,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.backgroundColor,
        opacity: 0.7,
        // color: "white",
      },
    }),
  };
  const lightenHexColor = (hexColor, percent) => {
    const color = hexColor.substring(1);
    const num = parseInt(color, 16);
    const modifiedColor = (num + (255 - num) * percent).toString(16);
    return `#${modifiedColor.padStart(6, "0")}`;
  };
  const [selectedOptions, setSelectedOptions] = useState(field?.value || []);

  const selectedVals = selectedOptions.map((x) => x.value);
  const hiddenOptions = selectedVals.length > 3 ? selectedVals.slice(0, 3) : [];
  const options = optionWithRandomColors.filter(
    (x) => !hiddenOptions.includes(x.value)
  );

  const MoreSelectedBadge = ({ items }) => {
    const style = {
      position: "absolute",
      top: "4px",
      right: "20px",
      background: "#9AFFE3",
      borderRadius: "4px",
      fontFamily: "Outfit",
      fontSize: "11px",
      padding: "3px",
      order: 99,
    };

    const title = items.join(", ");
    const length = items.length;
    const label = `+ ${length} more`;

    return (
      <div style={style} title={title}>
        {label}
      </div>
    );
  };

  const MultiValue = ({ index, getValue, ...props }) => {
    const maxToShow = 1;
    const overflow = getValue()
      .slice(maxToShow)
      .map((x) => x.label);

    return index < maxToShow ? (
      <components.MultiValue {...props} />
    ) : index === maxToShow ? (
      <MoreSelectedBadge items={overflow} />
    ) : null;
  };
  const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    let color = "black";
    if (isFocused) bg = "#eee";
    if (isActive) color = " #28B781";

    const style = {
      alignItems: "center",
      backgroundColor: bg,
      color: color,
      // color: "inherit",
      display: "flex ",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };
    const pseudoCheckboxStyle = {
      marginRight: "8px",
      cursor: "pointer",
      position: "relative",
      width: "16px",
      height: "16px",
      border: "1px solid #D9D9D9",
      backgroundColor: isSelected ? "#28B781" : "transparent",
      borderRadius: "3px",
    };

    const customCheckmarkStyle = {
      position: "absolute",
      top: "2px",
      left: "4px",
      width: "6px",
      height: "8px",
      border: "2px solid white",
      borderLeft: "none",
      borderTop: "none",
      transform: isSelected ? "rotate(45deg)" : "rotate(0deg)",
      visibility: isSelected ? "visible" : "hidden",
    };
    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        <div style={pseudoCheckboxStyle}>
          <div style={customCheckmarkStyle}></div>
        </div>

        {children}
      </components.Option>
    );
  };
  return (
    <Select
      className="Select"
      closeMenuOnSelect={false}
      isMulti
      styles={colourStyles}
      options={options}
      hideSelectedOptions={false}
      defaultValue={defaultSelectedOption}
      onChange={(options) => {
        if (Array.isArray(options)) {
          setSelectedOptions(options.map((opt) => opt.value));
        }
      }}
      components={{
        Option: InputOption,
        MultiValue,
      }}
    />
  );
};
export default SelectField;
