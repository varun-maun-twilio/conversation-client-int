import React from 'react';

import { Menu, MenuItem, useMenuState, SubMenuButton } from '@twilio-paste/core/menu';


interface CannedResponse {
  label: string;
  text: string;
}

interface ResponseCategory {
  section: string;
  responses: CannedResponse[];
}

interface CannedResponseCategories {
  categories: ResponseCategory[];
}

export interface OwnProps {
  category: ResponseCategory;
  menu: any;
  message: string;
  onMenuClicked: (message: string)=> void;
}

const CategorySubMenu = ({ category, menu, message, onMenuClicked }: OwnProps) => {
  const submenu = useMenuState();
  


  return (
    <>
      <SubMenuButton {...submenu}>{category.section}</SubMenuButton>
      <Menu {...submenu} aria-label={category.section} element="CANNED_RESPONSES_MENU">
        {category.responses.map((response: CannedResponse) => (
          <MenuItem {...submenu} key={response.text} onClick={() => 
          {
            menu.hide();
            onMenuClicked(response.text)
          }}>
            {response.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CategorySubMenu;
