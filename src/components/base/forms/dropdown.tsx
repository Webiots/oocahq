import React, { useState }  from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Dropdownbox() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
  
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="dropdown-shadow">
    <DropdownToggle>
      Dropdown
        <FontAwesomeIcon icon={faChevronDown} />
      </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem>Item 2</DropdownItem>
      <DropdownItem active>Item 3 - active</DropdownItem>
      <DropdownItem>Item 4</DropdownItem>
      <DropdownItem className="hover">Item 5 -hover</DropdownItem>
    </DropdownMenu>
  </Dropdown>
  );
}

export default Dropdownbox;