import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Modal,
  Fade,
  Backdrop,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import '@fontsource/cinzel';
import '@fontsource/crimson-text';
import '@fontsource/monsieur-la-doulaise';

import { FooterComponent } from '../../MenuSistema';

const gothicTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#280000',
      light: '#450000',
      dark: '#1a0000'
    },
    secondary: {
      main: '#C7A34F',
      light: '#E8C87E',
      dark: '#A3873A'
    },
    background: {
      default: '#0A0A0A',
      paper: '#121212'
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#C7A34F'
    }
  },
  typography: {
    fontFamily: '"Cinzel", "Playfair Display", serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '0.1em'
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '0.05em'
    },
    h4: {
      color: '#C7A34F',
      fontWeight: 500,
      letterSpacing: '0.05em'
    },
    h5: {
      fontWeight: 400,
      fontStyle: 'italic',
      letterSpacing: '0.03em'
    },
    body1: {
      fontFamily: '"Crimson Text", serif',
      fontSize: '1.1rem',
      lineHeight: 1.6
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
        },
        '@global': {
          '@font-face': [
            {
              fontFamily: 'Cinzel',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            }
          ],
          body: {
            scrollBehavior: 'smooth'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(199, 163, 79, 0.3)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '8px 24px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)'
          }
        },
        containedSecondary: {
          color: '#0A0A0A',
          '&:hover': {
            backgroundColor: '#E8C87E'
          }
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          border: '1px solid rgba(199, 163, 79, 0.2)',
          borderRadius: '4px',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 20px -8px rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(199, 163, 79, 0.4)'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(199, 163, 79, 0.2)',
          margin: '2rem 0'
        }
      }
    }
  }
});

const produtosExemplo = [
  {
    id: 1,
    titulo: 'Lágrimas de Sangue',
    autor: 'Coleção de Poemas',
    descricao: 'Uma coletânea de poemas que exploram a dor e a melancolia em versos carregados de simbolismo gótico. Uma viagem lírica por temas como morte, amor perdido e a fragilidade da existência humana.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=Poemas+Goticos',
    paginas: 256
  },
  {
    id: 2,
    titulo: 'O Lamento do Corvo',
    autor: 'Edgar Allan Poe',
    descricao: 'Uma das obras mais famosas de Poe, nesta edição de luxo com ilustrações detalhadas. O poema narra a visita de um misterioso corvo que atormenta um estudante, mergulhando-o na loucura.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=O+Corvo',
    paginas: 128
  },
  {
    id: 3,
    titulo: 'Crônicas do Castelo',
    autor: 'Anne Rice',
    descricao: 'Uma saga de mistério e segredos familiares, ambientada em um castelo antigo. A história desvenda uma maldição ancestral que assombra gerações, revelando pactos sombrios e amores proibidos.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=Castelo',
    paginas: 412
  },
  {
    id: 4,
    titulo: 'A Maldição da Mansão',
    autor: 'Shirley Jackson',
    descricao: 'Um clássico do terror psicológico que explora uma casa assombrada e a psique de seus moradores. A narrativa claustrofóbica e perturbadora questiona o que é real e o que é apenas fruto da loucura.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=Mansao+Assombrada',
    paginas: 340
  },
  {
    id: 5,
    titulo: 'Flores do Mal',
    autor: 'Charles Baudelaire',
    descricao: 'A icônica obra de poesia que chocou a sociedade do século XIX. Baudelaire explora a beleza na decadência e na corrupção, criando uma ponte entre o paraíso e o inferno da condição humana.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=Baudelaire',
    paginas: 192
  },
  {
    id: 6,
    titulo: 'Cânticos da Noite',
    autor: 'Coleção de HQs',
    descricao: 'Uma graphic novel com histórias curtas de horror e mistério, cada uma com uma arte única e arrepiante. Perfeito para quem busca narrativas visuais intensas no universo gótico.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=Graphic+Novel',
    paginas: 88
  },
  {
    id: 7,
    titulo: 'A Dama de Branco',
    autor: 'Wilkie Collins',
    descricao: 'Um suspense vitoriano com segredos, loucura e identidade trocada. Uma história que tece uma complexa teia de intrigas, onde nada é o que parece e a verdade se esconde nas sombras.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=Dama+de+Branco',
    paginas: 624
  },
  {
    id: 8,
    titulo: 'As Bruxas de Salem',
    autor: 'Arthur Miller',
    descricao: 'Uma peça de teatro histórica que aborda histeria, fanatismo religioso e a caça às bruxas. Um clássico atemporal que reflete sobre o poder do medo e as injustiças da sociedade.',
    imagem: 'https://placehold.co/300x450/1A1A1A/C7A34F?font=playfair-display&text=Bruxas+de+Salem',
    paginas: 288
  },
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 800,
  bgcolor: 'background.paper',
  border: '2px solid',
  borderColor: 'secondary.main',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  textAlign: 'center',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: 4
};

const ListProduto = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const handleOpen = (produto) => {
    setSelectedProduto(produto);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleToggleFavorito = (produtoId) => {
    if (favoritos.includes(produtoId)) {
      setFavoritos(favoritos.filter(id => id !== produtoId));
    } else {
      setFavoritos([...favoritos, produtoId]);
    }
  };

  return (
    <ThemeProvider theme={gothicTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(199, 163, 79, 0.05) 0%, transparent 20%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Box sx={{ flexGrow: 1, py: 8 }}>
          <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 6,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '2px',
                  backgroundColor: 'secondary.main'
                }
              }}
            >
              Nossas Obras
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {produtosExemplo.map((produto) => (
                <Grid item key={produto.id} xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px -8px rgba(0, 0, 0, 0.6)',
                        borderColor: 'rgba(199, 163, 79, 0.4)'
                      }
                    }}
                    onClick={() => handleOpen(produto)}
                  >
                    <CardMedia
                      component="img"
                      height="450"
                      image={produto.imagem}
                      alt={produto.titulo}
                      sx={{
                        filter: 'grayscale(20%)',
                        transition: 'filter 0.3s ease',
                        '&:hover': {
                          filter: 'none'
                        }
                      }}
                    />
                    
                    <CardContent sx={{
                      flexGrow: 1,
                      textAlign: 'center',
                      position: 'relative',
                      backgroundColor: 'rgba(18, 18, 18, 0.7)'
                    }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {produto.titulo}
                      </Typography>
                      <Typography variant="body2" color="secondary">
                        {produto.autor}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        
        {/* Modal de Detalhes do Produto */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'secondary.main',
                }}
              >
                <CloseIcon />
              </IconButton>
              {selectedProduto && (
                <>
                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 'auto',
                        maxHeight: '100%',
                        borderRadius: '4px',
                        border: '1px solid rgba(199, 163, 79, 0.2)',
                        objectFit: 'contain'
                      }}
                      image={selectedProduto.imagem}
                      alt={selectedProduto.titulo}
                    />
                  </Box>
                  <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography id="transition-modal-title" variant="h4" component="h2" gutterBottom>
                      {selectedProduto.titulo}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center', gap: 2, mb: 1 }}>
                      <Typography variant="body2" color="secondary">
                        Autor: {selectedProduto.autor}
                      </Typography>
                    
                      <Typography variant="body2" color="secondary">
                        Páginas: {selectedProduto.paginas}
                      </Typography>
                    </Box>
                    <Typography id="transition-modal-description" sx={{ mt: 2, mb: 4, fontFamily: '"Crimson Text", serif' }}>
                      {selectedProduto.descricao}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: { md: 'flex-start' } }}>
                      <Button variant="contained" color="secondary" sx={{ flexGrow: { xs: 1, md: 'unset' } }}>
                        Comprar agora
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={favoritos.includes(selectedProduto.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        sx={{ flexGrow: { xs: 1, md: 'unset' } }}
                        onClick={() => handleToggleFavorito(selectedProduto.id)}
                      >
                        {favoritos.includes(selectedProduto.id) ? 'Favoritado' : 'Favoritar'}
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Fade>
        </Modal>

        <FooterComponent />
      </Box>
    </ThemeProvider>
  );
};

export default ListProduto;