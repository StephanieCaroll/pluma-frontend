import React from 'react';
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
  Paper
} from '@mui/material';

import '@fontsource/monsieur-la-doulaise';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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

const livrosExemplo = [
  {
    id: 1,
    titulo: 'A Sombra sobre Innsmouth',
    autor: 'H. P. Lovecraft',
    descricao: 'Um relato perturbador de criaturas marinhas e horrores ancestrais.',
    imagem: 'https://placehold.co/300x450/121212/C7A34F?font=playfair-display&text=Innsmouth'
  },
  {
    id: 2,
    titulo: 'Drácula',
    autor: 'Bram Stoker',
    descricao: 'A história definitiva do vampiro mais famoso da literatura.',
    imagem: 'https://placehold.co/300x450/121212/C7A34F?font=playfair-display&text=Dracula'
  },
  {
    id: 3,
    titulo: 'Frankenstein',
    autor: 'Mary Shelley',
    descricao: 'Uma meditação sobre a criação e a natureza da humanidade.',
    imagem: 'https://placehold.co/300x450/121212/C7A34F?font=playfair-display&text=Frankenstein'
  },
  {
    id: 4,
    titulo: 'O Retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    descricao: 'Um conto moral sobre beleza, decadência e a dupla natureza humana.',
    imagem: 'https://placehold.co/300x450/121212/C7A34F?font=playfair-display&text=Dorian+Gray'
  },
];

const promoBanners = [
  {
    id: 1,
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3Nw4EDdEW-Sg3tXj4Z5t4C85y-uahCzplAxGbaqZgqa5vsR1CqU5Ql8AOOJkCRiq8kKlPHz1V0-9wOQltiFiGOfXNz40TqVwH1QYoLUaIk1YPa6U3m078A0pypZiJyyMO-jP7P3CfVYs/s1600/os-cinco-melhores-livros-goticos-de-todos-os-tempos.jpg',
    title: 'A Coleção Gótica',
    subtitle: 'Compre 3, leve 4.',
    buttonText: 'Explorar'
  },
  {
    id: 2,
    image: 'https://a-static.mlcdn.com.br/800x600/livro-grandes-classicos-goticos-box-com-3-livros/temtudoguarulhos/9786585168335/3a8e5de9930d0369fd553085db2949d6.jpg',
    title: 'Horrores Clássicos',
    subtitle: 'Até 50% de desconto em títulos selecionados.',
    buttonText: 'Ver promoções'
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71+3JRUaEML._UF1000,1000_QL80_.jpg',
    title: 'Novidades Macabras',
    subtitle: 'Conheça os lançamentos da semana.',
    buttonText: 'Descubra agora'
  }
];

const PromotionalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Box sx={{
      width: '100%',
      height: '400px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Slider {...settings}>
        {promoBanners.map((banner) => (
          <Box key={banner.id} sx={{ position: 'relative', height: '400px' }}>
            <Box
              component="img"
              src={banner.image}
              alt={banner.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.30)',
              }}
            />
            <Container sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
              <Typography variant="h2" component="h2" gutterBottom sx={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {banner.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {banner.subtitle}
              </Typography>
              <Button variant="contained" color="secondary">
                {banner.buttonText}
              </Button>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const Home = () => {
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
        <Box sx={{ flexGrow: 1 }}>
          <PromotionalCarousel />

          <Box component="section" sx={{ py: 8 }}>
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
                Obras Primas
              </Typography>

              <Grid container spacing={4} justifyContent="center">
                {livrosExemplo.map((livro) => (
                  <Grid item key={livro.id} xs={12} sm={6} md={3}>
                    <Card sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      '&:hover': {
                        '& .card-overlay': {
                          opacity: 1
                        }
                      }
                    }}>
                      <CardMedia
                        component="img"
                        height="450"
                        image={livro.imagem}
                        alt={livro.titulo}
                        sx={{
                          filter: 'grayscale(20%)',
                          '&:hover': {
                            filter: 'none'
                          }
                        }}
                      />
                      <Box
                        className="card-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.3) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          p: 3
                        }}
                      >
                        <Typography variant="h6" sx={{ color: 'secondary.main' }}>
                          {livro.titulo}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', mb: 2 }}>
                          {livro.autor}
                        </Typography>
                        <Typography variant="body2" sx={{
                          color: 'text.secondary',
                          fontSize: '0.8rem',
                          fontStyle: 'italic',
                          mb: 2
                        }}>
                          {livro.descricao}
                        </Typography>
                      </Box>
                      <CardContent sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                        backgroundColor: 'rgba(18, 18, 18, 0.7)'
                      }}>
                        <Typography gutterBottom variant="h6" component="div">
                          {livro.titulo}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                          {livro.autor}
                        </Typography>
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{
                            mt: 2,
                            width: '100%'
                          }}
                        >
                          Explorar
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          <Box component="section" sx={{ py: 10, backgroundColor: 'rgba(10, 10, 10, 0.5)' }}>
            <Container maxWidth="lg">
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'rgba(40, 0, 0, 0.2)',
                  borderLeft: '4px solid',
                  borderColor: 'secondary.main',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '"„"',
                    position: 'absolute',
                    top: -40,
                    left: 20,
                    fontSize: '8rem',
                    color: 'rgba(199, 163, 79, 0.1)',
                    fontFamily: 'Georgia, serif',
                    lineHeight: 1
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Monsieur La Doulaise", cursive',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    color: '#E8C87E',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: 1.2,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  "A mais antiga e mais forte emoção da humanidade é o medo, e o mais antigo e mais forte tipo de medo é o medo do desconhecido."
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="right"
                  sx={{
                    mt: 2,
                    color: 'secondary.main',
                    fontWeight: 500
                  }}
                >
                  — H.P. Lovecraft
                </Typography>
              </Paper>
            </Container>
          </Box>
        </Box> 
      </Box>
       <FooterComponent />
    </ThemeProvider>
    
  );
};

export default Home;