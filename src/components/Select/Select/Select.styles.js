import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import styled, { css } from 'styled-components';
import { AsyncPaginate } from 'react-select-async-paginate';
import { styles } from 'components/atoms/Input';

export const InputHolder = styled.div`
  position: relative;
`;

const Styles = css`
  .chevron-down-icon {
    font-size: var(--font-xs);
    .ab-icons {
      transition: 0.3s linear;
    }
  }
  .react-select__control {
    ${styles}
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 22px;
    border-color: ${({ error }) => error && 'var(--danger) !important'};
    box-shadow: none;

    ${({ isDisabled }) =>
      isDisabled &&
      css`
        background: var(--grey-4);
        cursor: not-allowed;
      `}

    ${({ $size }) =>
      $size === 'xs' &&
      css`
        min-height: 30px;
        height: 30px;
      `}
    ${({ $size }) =>
      $size === 'sm' &&
      css`
        min-height: 36px;
      `}

        ${({ $size }) =>
      $size === 'md' &&
      css`
        min-height: 46px;
      `}

    &:hover {
      border-color: var(--border-color);
    }

    &.react-select__control--menu-is-open {
      border-bottom-color: ${({ menuWidth }) => !menuWidth && 'var(--primary)'};
      border-bottom-left-radius: ${({ menuWidth }) => !menuWidth && 0};
      border-bottom-right-radius: ${({ menuWidth }) => !menuWidth && 0};

      ${({ detachedMenu }) =>
        detachedMenu &&
        css`
          border-bottom-color: var(--border-color);
          border-bottom-left-radius: var(--border-radius-medium);
          border-bottom-right-radius: var(--border-radius-medium);
        `}
      .chevron-down-icon {
        .ab-icons {
          color: var(--primary);
          transform: rotate(0.5turn);
        }
      }
    }
  }
  .react-select__value-container--has-value {
    + .react-select__indicators {
      ${({ isClearable }) =>
        isClearable &&
        css`
          .react-select__dropdown-indicator {
            display: none;
          }
        `}
    }
  }
  .react-select__clear-indicator {
    padding: 6px 8px;
    ${({ isClearable }) =>
      isClearable &&
      css`
        padding: 0;
      `}
  }
  .react-select__dropdown-indicator {
    padding: 0;
  }
  .react-select__menu-list {
    padding-top: 0;
    padding-bottom: 0;
  }
  .react-select__input {
    color: transparent;
  }
  .react-select__input-container {
    color: transparent;
  }
  .react-select__placeholder {
    color: var(--text-color-60);
    opacity: 0.6;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 8px);
  }
  .react-select__value-container {
    padding-left: 0;
    padding-right: 0;
    ${({ $size }) =>
      $size === 'xs' &&
      css`
        height: 30px;
        padding-top: 0;
        padding-bottom: 0;
      `}
  }
  .react-select__menu {
    box-shadow: 0px 16px 24px rgba(145, 148, 164, 0.16);
    border-radius: 0 0 var(--border-radius-medium) var(--border-radius-medium);
    border: 1px solid var(--border-color);
    border-top: none;
    z-index: var(--z-index30);
    background: var(--bg-white);
    margin-top: 0;

    ${({ menuWidth }) =>
      menuWidth &&
      css`
        width: ${menuWidth}px;
        border-top: 1px solid var(--border-color);
        border-top-left-radius: var(--border-radius-medium);
        border-top-right-radius: var(--border-radius-medium);
        margin-top: 6px;
      `};
    ${({ detachedMenu }) =>
      detachedMenu &&
      css`
        margin-top: 2px;
        border-top: 1px solid var(--border-color);
        border-radius: var(--border-radius-medium);
      `}
  }
  .react-select__single-value {
    color: var(--text-color-60);
  }
  .react-select__option {
    font-size: var(--font-sm);
    cursor: pointer;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-color-80);
    padding-top: 14px;
    padding-bottom: 14px;
    &:last-child {
      border-bottom: none;
      ${({ detachedMenu }) =>
        detachedMenu &&
        css`
          border-bottom: none;
        `}
    }

    &:active {
      background: var(--grey-4);
    }
  }
  .react-select__option--is-focused {
    background: none;
    color: var(--primary);
  }
  .react-select__option--is-selected {
    background: var(--grey-4);
    color: var(--text-color);
  }
  ${({ isMulti }) =>
    isMulti &&
    css`
      .react-select__control {
        height: auto;
        min-height: 54px;
        ${({ $size }) =>
          $size === 'xs' &&
          css`
            min-height: 30px;
            height: auto;
          `}
        ${({ $size }) =>
          $size === 'sm' &&
          css`
            min-height: 36px;
          `}

        ${({ $size }) =>
          $size === 'md' &&
          css`
            min-height: 46px;
          `}
      }
      .react-select__value-container {
        ${({ $size }) =>
          $size === 'xs' &&
          css`
            /* min-height: 30px; */
            height: auto;
          `}
      }
      .react-select__option {
        position: relative;
        font-size: var(--font-sm);
        padding-left: 42px;
        padding-top: 14px;
        padding-bottom: 14px;
        &:before,
        &:after {
          content: '';
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          border: 2px solid var(--text-color-20);
          border-radius: 4px;
          width: 18px;
          height: 18px;
        }
        &:after {
          content: 'check';
          font-family: var(--font-icon);
          background: var(--primary);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s linear;
          color: var(--text-white);
          font-size: 10px;
          line-height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &.react-select__option--is-selected {
          background: none;
          color: #0f2546;
          &:after {
            opacity: 1;
            visibility: visible;
            border-color: var(--primary);
          }
          &:before {
            border-color: var(--primary);
          }
          &.react-select__option--is-focused {
            background: var(--grey-4);
          }
        }
      }
      .react-select__multi-value {
        background: var(--bg-white);
        font-size: 13px;
        line-height: 16px;
        border-radius: var(--border-radius-medium);
        border: 1px solid var(--border-color);
        color: var(--text-color-90);
        margin: 2px 4px;
      }
      .react-select__multi-value__label {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 12px;
        font-size: 13px;
        line-height: 1;
        ${({ $size }) =>
          $size === 'sm' &&
          css`
            padding-top: 3px;
            padding-bottom: 3px;
            [class^='Avatar-styles'] {
              /* width: 18px;
              height: 18px;
              font-size: 10px; */
              img {
                width: 18px;
                height: 18px;
              }
            }
          `}
      }
      .react-select__multi-value__remove {
        padding-right: 13px;
        &:hover {
          background: none;
          &:after {
            opacity: 1;
          }
        }
        &:after {
          content: 'close';
          font-family: var(--font-icon);
          color: var(--text-color-90);
          opacity: 0.6;
          font-size: 9px;
          line-height: 1;
        }
        svg {
          display: none;
        }
      }
    `}

  ${props =>
    props.menuPlacement === 'top' &&
    css`
      .react-select__menu {
        border-radius: var(--border-radius-medium) var(--border-radius-medium) 0 0;
        margin-top: 0;
        margin-bottom: 0;
        border-top: 1px solid var(--border-color);
        border-bottom: none;
      }

      .react-select__menu-list {
        padding-bottom: 0;
      }
      .react-select__control {
        &.react-select__control--menu-is-open {
          border-radius: 0 0 var(--border-radius-medium) var(--border-radius-medium);
          border-bottom-color: var(--border-color);
          border-top-color: var(--primary);
        }
      }
    `}
`;

export const StyledSelect = styled(Select)`
  ${Styles}
`;

export const StyledSelectAsync = styled(AsyncSelect)`
  ${Styles}
`;

export const StyledCreatableSelect = styled(CreatableSelect)`
  ${Styles}
`;

export const StyledSelectAsyncPaginate = styled(AsyncPaginate)`
  ${Styles}
`;

export const SearchBarHolder = styled.div`
  padding: 8px 16px 12px;
  border-bottom: 1px solid var(--border-color);
`;

export const BtnHolder = styled.div`
  background-color: var(--grey-4);
  padding: 12px 16px;
  margin-bottom: -4px;
  border-radius: 0 0 var(--border-radius-medium) var(--border-radius-medium);
`;

const btnStyles = css`
  font-size: var(--font-lg);
  color: var(--text-50);
`;

export const CopyBtn = styled.button`
  ${btnStyles}
  &:hover {
    color: var(--text-color);
  }
`;
export const DeleteBtn = styled.button`
  ${btnStyles}
  &:hover {
    color: var(--danger);
  }
`;
export const BtnsHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
export const CustomOptionHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const StyledMenuHeader = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  .select-menu-title {
    font-size: var(--font-base);
    font-weight: 500;
  }
`;
