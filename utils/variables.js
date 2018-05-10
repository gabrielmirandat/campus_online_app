import {mix} from 'polished'

// ----------------------------------------------------
// Sizes [Grid, Container & Breakpoints]
// ----------------------------------------------------

export const containerWidth = 1160
export const columns = 12
export const breakpoints = {
	xs: {width:    0, gutter: 1.0},
	sm: {width:  480, gutter: 1.5},
	md: {width:  768, gutter: 2.0},
	lg: {width:  992, gutter: 2.5},
	xg: {width: 1270, gutter: 2.5},
}


// ----------------------------------------------------
// Colors
// ----------------------------------------------------

const base = '#1a1b1c'
const white = 'white'
export const colors = {
	white: white,
	base: base,
	base88: mix(0.88, base, white),
	base66: mix(0.66, base, white),
	base44: mix(0.44, base, white),
	base22: mix(0.22, base, white),
	base11: mix(0.11, base, white),
	base06: mix(0.06, base, white),
	base03: mix(0.03, base, white),
	sucess: '#00D1B2',
	warning: '#FFDD57',
	danger: '#FF3860',
}


// ----------------------------------------------------
// Font Stacks
// ----------------------------------------------------

export const fonts = {
	sans: '-apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	serif: 'Arnhem, Georgia, Times, serif',
}