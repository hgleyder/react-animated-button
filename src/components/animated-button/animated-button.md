#
Preset colors

```jsx
<AnimatedButton color="info">Info</AnimatedButton>
<AnimatedButton color="success" textColor="white">Success</AnimatedButton>
<AnimatedButton color="warning">Warning</AnimatedButton>
<AnimatedButton color="danger"  textColor="white">Danger</AnimatedButton>
<AnimatedButton color="lightPink">LightPink</AnimatedButton>
<AnimatedButton color="darkPurple" textColor="white">DarkPurple</AnimatedButton>
<AnimatedButton color="dark" textColor="white">Dark</AnimatedButton>
```

Preset colors (Outlined Variant)

```jsx
<AnimatedButton variant="outlined" color="info">Info</AnimatedButton>
<AnimatedButton variant="outlined" color="success">Success</AnimatedButton>
<AnimatedButton variant="outlined" color="warning">Warning</AnimatedButton>
<AnimatedButton variant="outlined" color="danger">Danger</AnimatedButton>
<AnimatedButton variant="outlined" color="lightPink">LightPink</AnimatedButton>
<AnimatedButton variant="outlined" color="darkPurple">DarkPurple</AnimatedButton>
<AnimatedButton variant="outlined" color="dark">Dark</AnimatedButton>
```

Do the same with any color you want! (Ex: #3742fa)

```jsx
<div style={{margin: '0rem 1rem', display: 'inline-block'}}>
    <AnimatedButton color="#3742fa" textColor="white">Custom Color Filled</AnimatedButton>
</div>
<div style={{margin: '0rem 1rem', display: 'inline-block'}}>
    <AnimatedButton variant="outlined" color="#3742fa">Custom Color Outlined</AnimatedButton>
</div>
```

Pulse Animation

```jsx
<div style={{margin: '0rem 1rem', display: 'inline-block'}}>
    <AnimatedButton color="success" animationDuration={1} animationType="pulse">Pulse Animation</AnimatedButton>
</div>
<div style={{margin: '0rem 1rem', display: 'inline-block'}}>
    <AnimatedButton variant="outlined" color="success" animationDuration={1} animationType="pulse">Pulse Animation Outlined</AnimatedButton>
</div>
```

Brightness Animation

```jsx
<div style={{margin: '0rem 1rem', display: 'inline-block'}}>
    <AnimatedButton color="success" animationDuration={1} color="#4bcffa" animationType="brightness">Brightness Animation</AnimatedButton>
</div>
<div style={{margin: '0rem 1rem', display: 'inline-block'}}>
    <AnimatedButton variant="outlined" color="#4bcffa" animationDuration={1} animationType="brightness">Brightness Animation Outlined</AnimatedButton>
</div>
```

Button Radius

```jsx
<div style={{margin: '0rem 0.2rem', display: 'inline-block'}}>
    <AnimatedButton color="success" buttonRadius="0rem">Squared Button</AnimatedButton>
</div>
<div style={{margin: '0rem 0.2rem', display: 'inline-block'}}>
    <AnimatedButton buttonStyle={{padding: '0.5rem'}} color="info" buttonRadius="50%">👍</AnimatedButton>
</div>
<div style={{margin: '0rem 0.2rem', display: 'inline-block'}}>
    <AnimatedButton buttonStyle={{padding: '0.5rem'}} color="#f1f2f6" buttonRadius="10%">❤️</AnimatedButton>
</div>
```

