import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import cx from 'clsx';
import { createTheme, ThemeProvider, useTheme  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
});

const useStyles = makeStyles((theme) => {
  return {
    button: {
      backgroundColor: 'red',
      padding: 3,
      cursor: 'pointer',
    },
    title: {
      fontSize: '32px',
    }
  }
});

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const classes = useStyles();
  // const theme = useTheme();



  const increment = () => {
    setCount(state => ++state);
  };

  function isPalindrome(str: string) {
    // Приводим строку к нижнему регистру и убираем все символы, кроме букв и цифр
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    console.log('cleaned: ', cleaned);

    // Сравниваем строку с её обратным вариантом
    return cleaned === cleaned.split('').reverse().join('');
  }

  isPalindrome('A man, a plan, a canal: Panama');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div>
          <Typography
            variant='h3'
          >
            PLATFORM={__PLATFORM__}
          </Typography>
          <Link to='/about'>about</Link>
          <br />
          <Link to='/shop'>shop</Link>
          <h1 className={classes.title}>{count}</h1>
          <button
            className={classes.button}
            onClick={increment}
          >
            inc
          </button>
          <Outlet />
        </div>
      </Container>
    </ThemeProvider>
  );
}
