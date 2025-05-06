// INput Component
export interface InputProps {
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: string;
  name: string;
}

export interface ObjProps {
  inputProps: InputProps;
}

// LinkInput Component
export interface LinkInputProps {
  updateLink: (id: string, address: string) => void;
  address: string;
  id: string;
  error?: string;
}

// LinksDropDown Component
export interface ArrayProps {
  // ArrayProps
  name: string; // name
  icon: string; // icon
  id: string; // id
}
export interface LinksDropDownProps {
  array: ArrayProps[]; // array
  updateDrop: (id: string, arr: ArrayProps) => void; // updateDrop
  id: string; // id
  active: ArrayProps; // active
}

// Home Component
export interface LinkList {
  data: {
    name: string;
    icon: string;
    id: string;
  };
  id: string;
  address: string;
  error?: string;
}
