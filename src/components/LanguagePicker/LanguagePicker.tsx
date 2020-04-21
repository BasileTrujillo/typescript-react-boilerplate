import React, { useContext } from 'react';
import { AppContext } from 'views/App/App.context';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FlagIcon from '../../services/style/FlagIcon';
import { Tooltip } from '@material-ui/core';
import { useIntl } from 'react-intl';

const options = [
  {
    key: 'fr-FR',
    label: <FlagIcon code={'fr'} />,
  },
  {
    key: 'en-US',
    label: <FlagIcon code={'us'} />,
  },
];

export const LanguagePicker = () => {
  const { formatMessage: f } = useIntl();
  const appContext = useContext(AppContext);
  const setLanguage = (lang: string) =>
    appContext.dispatch({ type: 'change-language', lang });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * Open the menu by setting the anchor element
   * @param event
   */
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Close the menu by clearing the anchor element
   */
  const closeMenu = () => {
    setAnchorEl(null);
  };

  /**
   * Get a function that set the app language to the given local
   * @param {string} local Local in ISO format (en-US)
   */
  const getLocalSelectHandler = (local: string) => () => {
    setLanguage(local);
    closeMenu();
  };

  // Get the selected language data
  const selectedOptions = options.find(
    (value: any) => value.key === appContext.state.lang,
  );

  return (
    <div>
      <Tooltip title={f({ id: 'selectALanguage' })}>
        <IconButton
          aria-label="select language"
          aria-controls="language-picker-menu"
          aria-haspopup="true"
          onClick={openMenu}
        >
          {selectedOptions?.label}
        </IconButton>
      </Tooltip>
      <Menu
        id="language-picker-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={closeMenu}
      >
        {options.map((value: any) => (
          <MenuItem
            key={value.key}
            selected={value.key === appContext.state.lang}
            onClick={getLocalSelectHandler(value.key)}
          >
            {value.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
