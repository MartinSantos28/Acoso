import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './components/pages/HomePage';
import theme from './theme';
import CardManuscrita from './components/atoms/CardManuscrita';
import React from 'react';

const mensajes = [
  'Si necesitas un amigo, busca a Dios ♥',
  'Yo te creo! NO estás sola y eres muy fuerte',
  'Que el miedo NO te calle, HÁBLALO!',
  'El cobarde vive hasta que el valiente quiere.',
  'No fue tu culpa ♥',
  'No te sientas solx! Siempre hay alguien a quien le puedas contar',
  'Niños cuidado. Existen los mounstros, son los humanos. Niñ@, adulto, cuídate.',
  'No vale la pena perturbar tu paz mental por alguien que no la tiene',
  'No eres lo que alguien más te hizo',
];

function getSideDistributedPosition(idx, total) {
  const vw = window.innerWidth;
  const vh = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, window.innerHeight);
  const isMobile = vw < 700;
  const cardsPerSide = Math.ceil(total / 2);
  const gap = (vh - 120) / (cardsPerSide + 1);
  const isLeft = idx < cardsPerSide;
  const posInSide = isLeft ? idx : idx - cardsPerSide;
  const top = gap * (posInSide + 0.1 );
  // Offset lateral: más separado en desktop, menos en móvil
  const leftOffset = isMobile ? 2 : 2 + Math.random() * 2; // 2vw a 4vw
  const rightOffset = isMobile ? 2 : 4 + Math.random() * 3; // 4vw a 7vw
  // Tamaño responsivo
  const scale = isMobile ? 0.8 : 1;
  const style = {
    top: `${top}px`,
    transform: `rotate(${(Math.random() - 0.5) * 8}deg) scale(${scale})`,
  };
  if (isLeft) {
    style.left = `${leftOffset}vw`;
  } else {
    style.right = `${rightOffset}vw`;
  }
  return style;
}

function CardsDecorativos() {
  const [positions, setPositions] = React.useState([]);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      // 4 cards en las esquinas
      setPositions([
        { top: '18px', left: '12px', transform: 'scale(0.8) rotate(-3deg)' }, // superior izquierda
        { top: '18px', right: '12px', transform: 'scale(0.8) rotate(2deg)' }, // superior derecha
        { bottom: '18px', left: '12px', transform: 'scale(0.8) rotate(2deg)' }, // inferior izquierda
        { bottom: '18px', right: '12px', transform: 'scale(0.8) rotate(-2deg)' }, // inferior derecha
      ]);
    } else {
      const arr = mensajes.map((_, idx) => getSideDistributedPosition(idx, mensajes.length));
      setPositions(arr);
    }
  }, [isMobile]);

  return (
    <>
      {isMobile
        ? positions.map((style, i) => (
            <CardManuscrita key={i} mensaje={mensajes[i]} style={style} delay={i * 0.2} />
          ))
        : mensajes.map((msg, i) => (
            <CardManuscrita key={i} mensaje={msg} style={positions[i] || {}} delay={i * 0.2} />
          ))}
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CardsDecorativos />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
