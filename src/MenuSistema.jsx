import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  alpha,
  styled,
  Typography,
  Container,
  Grid,
  Divider
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Cores do rodapé
const gold = 'rgba(199, 163, 79, 1)';
const goldLight = 'rgba(199, 163, 79, 0.7)';
const backgroundDark = '#000';

// Estilização da barra de pesquisa
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(gold, 0.1),
  '&:hover': {
    backgroundColor: alpha(gold, 0.2),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 400,
  },
  border: `1px solid ${alpha(gold, 0.3)}`
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: gold,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  fontFamily: '"Crimson Text", serif',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

// Novo componente de rodapé
export const FooterComponent = () => {
  return (
    <Box component="footer" sx={{ py: 6, borderTop: '1px solid rgba(199, 163, 79, 0.1)', backgroundColor: 'backgroundDark' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
              Pluma
            </Typography>
            <Typography variant="body2">
              Uma biblioteca dedicada à preservação e celebração da literatura gótica e de horror.
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Navegar
            </Typography>
            {['Início', 'Livros', 'Autores', 'Coleções'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Legal
            </Typography>
            {['Termos', 'Privacidade', 'Cookies'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>      
          
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Pluma. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

const MenuSistema = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  // A correção está aqui: o hook useNavigate foi adicionado à importação no topo do arquivo.
  // Isso resolve o erro de "useNavigate is not defined".
  const navigate = useNavigate(); 
  
  return (
    <AppBar position="static" sx={{ backgroundColor: backgroundDark, boxShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'center', pt: 1, pb: 0 }}>
        {/* Linha superior */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', alignItems: 'center', justifyContent: 'space-between', px: 4 }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/PlumaLogoPrincipal.png"
              alt="Logo Pluma"
              sx={{ height: 200, width: 200 }}
            />
          </Box>

          {/* Frase + Barra de pesquisa + Navegação */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, flex: 1, mx: 2 }}>
            <Box sx={{
              fontSize: '1.2rem',
              color: 'white',
              fontWeight: 500,
              fontFamily: '"UnifrakturMaguntia", cursive',
              textAlign: 'center'
            }}>
              Encontre seu Próximo Livro Favorito
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar livros, autores..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {/* Navegação logo abaixo da barra de pesquisa */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              mt: 1,
              flexWrap: 'wrap',
              gap: 2
            }}>
              <Button component={Link} to="/" sx={{ color: 'white', fontWeight: 500, fontFamily: '"Crimson Text", serif', transition: '0.3s', '&:hover': { color: goldLight } }}>Home</Button>
              <Button component={Link} to="/list-cliente" sx={{ color: 'white', fontWeight: 500, fontFamily: '"Crimson Text", serif', transition: '0.3s', '&:hover': { color: goldLight } }}>Cliente</Button>
              <Button component={Link} to="/list-produto" sx={{ color: 'white', fontWeight: 500, fontFamily: '"Crimson Text", serif', transition: '0.3s', '&:hover': { color: goldLight } }}>Produto</Button>
              <Button
                onClick={handleMenuOpen}
                startIcon={<MenuBookIcon />}
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  fontFamily: '"Crimson Text", serif',
                  transition: '0.3s', '&:hover': { color: goldLight }
                }}
              >
                Categorias
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: '#1e1e1e',
                    color: 'white',
                    fontFamily: '"Crimson Text", serif'
                  }
                }}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/categoria/ficcao">Ficção</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/categoria/horror">Horror</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/categoria/gotico">Gótico</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/categoria/misterio">Mistério</MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Ícones à direita */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton onClick={() => navigate('/form-login')} sx={{ color: 'white', transition: '0.3s', '&:hover': { color: goldLight } }}>
              <AccountCircleIcon />
            </IconButton>

            <IconButton sx={{ color: 'white', transition: '0.3s', '&:hover': { color: goldLight } }}><FavoriteBorderIcon /></IconButton>
            <IconButton onClick={() => navigate('/carrinho')} sx={{ color: 'white', transition: '0.3s', '&:hover': { color: goldLight } }}><ShoppingCartIcon /></IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuSistema;
