import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';
import {
  crescendo, decrescendo,
  pulseIn, pulseOut, brigthIn, brigthOut,
} from '../constants/animations';

const definedColors = {
  info: '#48dbfb',
  success: '#1dd1a1',
  danger: '#ee5253',
  warning: '#feca57',
  lightPink: '#ff9ff3',
  darkPurple: '#5f27cd',
  dark: '#222f3e',
};

const animationsIn = {
  zoomIn: crescendo,
  pulse: pulseIn,
  brightness: brigthIn,
};

const animationsOut = {
  zoomIn: decrescendo,
  pulse: pulseOut,
  brightness: brigthOut,
};

const AnimatedButton = ({
  children, textColor, color, fontFamily, fullWidth, onClick,
  variant, buttonStyle, animationType, animationDuration,
  buttonRadius,
}) => (
  <Container
    color={definedColors[color] || color}
    textColor={textColor}
    fontFamily={fontFamily}
    fullWidth={fullWidth}
    variant={variant}
    style={buttonStyle}
    animationType={animationType}
    animationDuration={animationDuration}
    buttonRadius={buttonRadius}
    onClick={onClick}
  >
    {children}
  </Container>);

const Container = styled.div`
    display: inline-block;
    width: ${props => (props.fullWidth ? '100%' : 'auto')}; 
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    border-radius: ${props => props.buttonRadius};
    padding: 0.5rem 1rem;
    color: ${props => (props.variant === 'filled' ? props.textColor : props.color)};
    background-color: ${props => (props.variant === 'filled' ? props.color : 'transparent')};
    border: 1px solid ${props => (props.color)};
    font-family: ${props => props.fontFamily};
    animation: ${props => animationsOut[props.animationType]} ${props => props.animationDuration}s ease-in;
    animation-fill-mode: ${props => props.animationType === 'zoomIn' && 'forwards'};

    &:hover {
        background-color: ${props => (props.variant === 'filled' ? Color(props.color).darken(0.2).string() : 'transparent')};
        color: ${props => (props.variant === 'filled' ? props.textColor : Color(props.color).darken(0.2).string())};
        border: 1px solid ${props => (Color(props.color).darken(0.2).string())};
        animation: ${props => animationsIn[props.animationType]} ${props => props.animationDuration}s ${props => (props.animationType === 'zoomIn' ? 'ease-in' : 'infinite')};
        animation-fill-mode: ${props => props.animationType === 'zoomIn' && 'forwards'};
    }
`;


AnimatedButton.propTypes = {
  /** Content of the Button component */
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  /** Button background color */
  color: PropTypes.string,
  /** Button text color */
  textColor: PropTypes.string,
  /** Button text font-family */
  fontFamily: PropTypes.string,
  /** Set the component width as 100% */
  fullWidth: PropTypes.bool,
  /** Inline styles to modify the default component styles */
  // eslint-disable-next-line react/forbid-prop-types
  buttonStyle: PropTypes.object,
  /** Button Colors combination variant */
  variant: PropTypes.oneOf(['filled', 'outlined']),
  /** Animation used when the component is hover */
  animationType: PropTypes.oneOf(['zoomIn', 'pulse', 'brightness']),
  /** Duration of the animation selected */
  animationDuration: PropTypes.number,
  /** Button container border radius */
  buttonRadius: PropTypes.string,
  /** Action called when the user clicks on the button */
  onClick: PropTypes.func,
};

AnimatedButton.defaultProps = {
  children: null,
  color: '#c8d6e5',
  textColor: 'black',
  fontFamily: 'Arial',
  fullWidth: false,
  variant: 'filled',
  buttonStyle: {},
  animationType: 'zoomIn',
  animationDuration: 0.3,
  buttonRadius: '0.3rem',
  onClick: () => {},
};

export default AnimatedButton;
