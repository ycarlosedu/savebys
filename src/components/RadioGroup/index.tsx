"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import "./styles.css";

type RadioItem = RadioGroup.RadioGroupItemProps & {
  label: string;
};

type RadioGroupInputsProps = RadioGroup.RadioGroupProps & {
  radios: RadioItem[];
  invalid?: boolean;
  disabled?: boolean;
  ariaLabel: string;
};

const RadioGroupInputs = ({
  radios = [],
  value,
  name,
  onValueChange,
  invalid,
  disabled,
  ariaLabel
}: RadioGroupInputsProps) => (
  <RadioGroup.Root
    className="RadioGroup_Root"
    defaultValue={value}
    aria-label={ariaLabel}
    onValueChange={onValueChange}
    name={name}
    disabled={disabled}
    value={value}
    autoFocus
  >
    {radios?.map((radio) => (
      <div key={radio.value} className="RadioGroup_ItemContainer">
        <RadioGroup.Item
          className="RadioGroup_Item"
          autoFocus={radio.autoFocus}
          value={radio.value}
          id={radio.label}
          data-invalid={invalid}
        >
          <RadioGroup.Indicator className="RadioGroup_Indicator" />
        </RadioGroup.Item>
        <label className="RadioGroup_Label" htmlFor={radio.label}>
          {radio.label}
        </label>
      </div>
    ))}
  </RadioGroup.Root>
);

export default RadioGroupInputs;
