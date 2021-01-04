// cSpell: disable
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import { colors, highlights } from '../theme/constants';

type Props = {
	blueColor?: string;
	indigoColor?: string;
	purpleColor?: string;
	pinkColor?: string;
	redColor?: string;
	orangeColor?: string;
	yellowColor?: string;
	greenColor?: string;
	tealColor?: string;
	cyanColor?: string;
	whiteColor?: string;
	grayColor?: string;
	darkGrayColor?: string;
	primaryColor?: string;
	secondaryColor?: string;
	successColor?: string;
	infoColor?: string;
	warningColor?: string;
	dangerColor?: string;
	lightColor?: string;
	darkColor?: string;
	dark?: 0 | 1;
};

const Bootstrap = createGlobalStyle`
:root {
	--bs-blue: ${({ blueColor: blue }) => blue || '#0d6efd'};
	--bs-indigo: ${({ indigoColor: indigo }) => indigo || '#6610f2'};
	--bs-purple: ${({ purpleColor: purple }) => purple || '#6f42c1'};
	--bs-pink: ${({ pinkColor: pink }) => pink || '#d63384'};
	--bs-red: ${({ redColor: red }) => red || '#dc3545'};
	--bs-orange: ${({ orangeColor: orange }) => orange || '#fd7e14'};
	--bs-yellow: ${({ yellowColor: yellow }) => yellow || '#ffc107'};
	--bs-green: ${({ greenColor: green }) => green || '#198754'};
	--bs-teal: ${({ tealColor: teal }) => teal || '#20c997'};
	--bs-cyan: ${({ cyanColor: cyan }) => cyan || '#0dcaf0'};
	--bs-white: ${({ whiteColor: white }) => white || '#ffffff'};
	--bs-gray: ${({ grayColor: gray }) => gray || '#6c757d'};
	--bs-gray-dark: ${({ darkGrayColor: darkGray }) => darkGray || '#343a40'};
	--bs-primary: ${({ primaryColor: primary }) => primary || '#0d6efd'};
	--bs-secondary: ${({ secondaryColor: secondary }) => secondary || '#6c757d'};
	--bs-success: ${({ successColor: success }) => success || '#198754'};
	--bs-info: ${({ infoColor: info }) => info || '#0dcaf0'};
	--bs-warning: ${({ warningColor: warning }) => warning || '#ffc107'};
	--bs-danger: ${({ dangerColor: danger }) => danger || '#dc3545'};
	--bs-light: ${({ lightColor: light }) => light || '#f8f9fa'};
	--bs-dark: ${({ darkColor: dark }) => dark || '#212529'};
	--bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
		'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
	--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}
*,
::after,
::before {
	box-sizing: border-box;
}
@media (prefers-reduced-motion: no-preference) {
	:root {
		scroll-behavior: smooth;
	}
}
body {
	margin: 0;
	font-family: var(--bs-font-sans-serif);
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	-webkit-text-size-adjust: 100%;
	-webkit-tap-highlight-color: transparent;
}
[tabindex='-1']:focus:not(:focus-visible) {
	outline: 0 !important;
}
hr {
	margin: 1rem 0;
	color: inherit;
	background-color: currentColor;
	border: 0;
	opacity: 0.25;
}
hr:not([size]) {
	height: 1px;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
	margin-bottom: 0.5rem;
	font-weight: 500;
	line-height: 1.2;
}
.h1,
h1 {
	font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
	.h1,
	h1 {
		font-size: 2.5rem;
	}
}
.h2,
h2 {
	font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
	.h2,
	h2 {
		font-size: 2rem;
	}
}
.h3,
h3 {
	font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
	.h3,
	h3 {
		font-size: 1.75rem;
	}
}
.h4,
h4 {
	font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
	.h4,
	h4 {
		font-size: 1.5rem;
	}
}
.h5,
h5 {
	font-size: 1.25rem;
}
.h6,
h6 {
	font-size: 1rem;
}
p {
	margin-top: 0;
	margin-bottom: 1rem;
}
ol,
ul {
	padding-left: 2rem;
}
dl,
ol,
ul {
	margin-top: 0;
	margin-bottom: 1rem;
}
ol ol,
ol ul,
ul ol,
ul ul {
	margin-bottom: 0;
}
blockquote {
	margin: 0 0 1rem;
}
b,
strong {
	font-weight: bolder;
}
.small,
small {
	font-size: 0.875em;
}
a:not([href]):not([class]),
a:not([href]):not([class]):hover {
	color: inherit;
	text-decoration: none;
}
code,
kbd,
pre,
samp {
	font-family: var(--bs-font-monospace);
	font-size: 1em;
	direction: ltr;
	unicode-bidi: bidi-override;
}
pre {
	display: block;
	margin-top: 0;
	margin-bottom: 1rem;
	overflow: auto;
	font-size: 0.875em;
}
pre code {
	font-size: inherit;
	color: inherit;
	word-break: normal;
}
code {
	font-size: 0.875em;
	color: var(--bs-pink);
	word-wrap: break-word;
}
a > code {
	color: inherit;
}
figure {
	margin: 0 0 1rem;
}
img,
svg {
	vertical-align: middle;
}
table {
	caption-side: bottom;
	border-collapse: collapse;
}
caption {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	color: var(--bs-gray);
	text-align: left;
}
th {
	text-align: inherit;
	text-align: -webkit-match-parent;
}
tbody,
td,
tfoot,
th,
thead,
tr {
	border-color: inherit;
	border-style: solid;
	border-width: 0;
}
label {
	display: inline-block;
}
button {
	border-radius: 0;
}
button:focus {
	outline: dotted 1px;
	outline: -webkit-focus-ring-color auto 5px;
}
button,
input,
optgroup,
select,
textarea {
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}
button,
select {
	text-transform: none;
}
[role='button'] {
	cursor: pointer;
}
select {
	word-wrap: normal;
}
[list]::-webkit-calendar-picker-indicator {
	display: none;
}
[type='button'],
[type='reset'],
[type='submit'],
button {
	-webkit-appearance: button;
}
[type='button']:not(:disabled),
[type='reset']:not(:disabled),
[type='submit']:not(:disabled),
button:not(:disabled) {
	cursor: pointer;
}
::-moz-focus-inner {
	padding: 0;
	border-style: none;
}
textarea {
	resize: vertical;
}
fieldset {
	min-width: 0;
	padding: 0;
	margin: 0;
	border: 0;
}
legend {
	float: left;
	width: 100%;
	padding: 0;
	margin-bottom: 0.5rem;
	font-size: calc(1.275rem + 0.3vw);
	line-height: inherit;
}
@media (min-width: 1200px) {
	legend {
		font-size: 1.5rem;
	}
}
legend + * {
	clear: left;
}
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-year-field {
	padding: 0;
}
::-webkit-inner-spin-button {
	height: auto;
}
[type='search'] {
	outline-offset: -2px;
	-webkit-appearance: textfield;
}
::-webkit-search-decoration {
	-webkit-appearance: none;
}
::-webkit-color-swatch-wrapper {
	padding: 0;
}
::file-selector-button {
	font: inherit;
}
::-webkit-file-upload-button {
	font: inherit;
	-webkit-appearance: button;
}
summary {
	display: list-item;
	cursor: pointer;
}
progress {
	vertical-align: baseline;
}
[hidden] {
	display: none !important;
}
.lead {
	font-size: 1.25rem;
	font-weight: 300;
}
.display-1 {
	font-size: calc(1.625rem + 4.5vw);
	font-weight: 300;
	line-height: 1.2;
}
@media (min-width: 1200px) {
	.display-1 {
		font-size: 5rem;
	}
}
.display-2 {
	font-size: calc(1.575rem + 3.9vw);
	font-weight: 300;
	line-height: 1.2;
}
@media (min-width: 1200px) {
	.display-2 {
		font-size: 4.5rem;
	}
}
.display-3 {
	font-size: calc(1.525rem + 3.3vw);
	font-weight: 300;
	line-height: 1.2;
}
@media (min-width: 1200px) {
	.display-3 {
		font-size: 4rem;
	}
}
.display-4 {
	font-size: calc(1.475rem + 2.7vw);
	font-weight: 300;
	line-height: 1.2;
}
@media (min-width: 1200px) {
	.display-4 {
		font-size: 3.5rem;
	}
}
.display-5 {
	font-size: calc(1.425rem + 2.1vw);
	font-weight: 300;
	line-height: 1.2;
}
@media (min-width: 1200px) {
	.display-5 {
		font-size: 3rem;
	}
}
.display-6 {
	font-size: calc(1.375rem + 1.5vw);
	font-weight: 300;
	line-height: 1.2;
}
@media (min-width: 1200px) {
	.display-6 {
		font-size: 2.5rem;
	}
}
.list-unstyled {
	padding-left: 0;
	list-style: none;
}
.list-inline {
	padding-left: 0;
	list-style: none;
}
.list-inline-item {
	display: inline-block;
}
.list-inline-item:not(:last-child) {
	margin-right: 0.5rem;
}
.initialism {
	font-size: 0.875em;
	text-transform: uppercase;
}
.blockquote {
	margin-bottom: 1rem;
	font-size: 1.25rem;
}
.blockquote > :last-child {
	margin-bottom: 0;
}
.blockquote-footer {
	margin-top: -1rem;
	margin-bottom: 1rem;
	font-size: 0.875em;
	color: var(--bs-gray);
}
.blockquote-footer::before {
	content: '— ';
}
.img-fluid {
	max-width: 100%;
	height: auto;
}
.img-thumbnail {
	padding: 0.25rem;
	background-color: var(--bs-white);
	border: 1px solid #dee2e6;
	border-radius: 0.25rem;
	max-width: 100%;
	height: auto;
}
.figure {
	display: inline-block;
}
.figure-img {
	margin-bottom: 0.5rem;
	line-height: 1;
}
.figure-caption {
	font-size: 0.875em;
	color: var(--bs-gray);
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
	width: 100%;
	padding-right: var(--bs-gutter-x, 0.75rem);
	padding-left: var(--bs-gutter-x, 0.75rem);
	margin-right: auto;
	margin-left: auto;
}
@media (min-width: 576px) {
	.container,
	.container-sm {
		max-width: 540px;
	}
}
@media (min-width: 768px) {
	.container,
	.container-md,
	.container-sm {
		max-width: 720px;
	}
}
@media (min-width: 992px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm {
		max-width: 960px;
	}
}
@media (min-width: 1200px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm,
	.container-xl {
		max-width: 1140px;
	}
}
@media (min-width: 1400px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm,
	.container-xl,
	.container-xxl {
		max-width: 1320px;
	}
}
.row {
	--bs-gutter-x: 1.5rem;
	--bs-gutter-y: 0;
	display: flex;
	flex-wrap: wrap;
	margin-top: calc(var(--bs-gutter-y) * -1);
	margin-right: calc(var(--bs-gutter-x) / -2);
	margin-left: calc(var(--bs-gutter-x) / -2);
}
.row > * {
	flex-shrink: 0;
	width: 100%;
	max-width: 100%;
	padding-right: calc(var(--bs-gutter-x) / 2);
	padding-left: calc(var(--bs-gutter-x) / 2);
	margin-top: var(--bs-gutter-y);
}
.col {
	flex: 1 0 0%;
}
.row-cols-auto > * {
	flex: 0 0 auto;
	width: auto;
}
.row-cols-1 > * {
	flex: 0 0 auto;
	width: 100%;
}
.row-cols-2 > * {
	flex: 0 0 auto;
	width: 50%;
}
.row-cols-3 > * {
	flex: 0 0 auto;
	width: 33.3333333333%;
}
.row-cols-4 > * {
	flex: 0 0 auto;
	width: 25%;
}
.row-cols-5 > * {
	flex: 0 0 auto;
	width: 20%;
}
.row-cols-6 > * {
	flex: 0 0 auto;
	width: 16.6666666667%;
}
.col-auto {
	flex: 0 0 auto;
	width: auto;
}
.col-1 {
	flex: 0 0 auto;
	width: 8.3333333333%;
}
.col-2 {
	flex: 0 0 auto;
	width: 16.6666666667%;
}
.col-3 {
	flex: 0 0 auto;
	width: 25%;
}
.col-4 {
	flex: 0 0 auto;
	width: 33.3333333333%;
}
.col-5 {
	flex: 0 0 auto;
	width: 41.6666666667%;
}
.col-6 {
	flex: 0 0 auto;
	width: 50%;
}
.col-7 {
	flex: 0 0 auto;
	width: 58.3333333333%;
}
.col-8 {
	flex: 0 0 auto;
	width: 66.6666666667%;
}
.col-9 {
	flex: 0 0 auto;
	width: 75%;
}
.col-10 {
	flex: 0 0 auto;
	width: 83.3333333333%;
}
.col-11 {
	flex: 0 0 auto;
	width: 91.6666666667%;
}
.col-12 {
	flex: 0 0 auto;
	width: 100%;
}
.offset-1 {
	margin-left: 8.3333333333%;
}
.offset-2 {
	margin-left: 16.6666666667%;
}
.offset-3 {
	margin-left: 25%;
}
.offset-4 {
	margin-left: 33.3333333333%;
}
.offset-5 {
	margin-left: 41.6666666667%;
}
.offset-6 {
	margin-left: 50%;
}
.offset-7 {
	margin-left: 58.3333333333%;
}
.offset-8 {
	margin-left: 66.6666666667%;
}
.offset-9 {
	margin-left: 75%;
}
.offset-10 {
	margin-left: 83.3333333333%;
}
.offset-11 {
	margin-left: 91.6666666667%;
}
.g-0,
.gx-0 {
	--bs-gutter-x: 0;
}
.g-0,
.gy-0 {
	--bs-gutter-y: 0;
}
.g-1,
.gx-1 {
	--bs-gutter-x: 0.25rem;
}
.g-1,
.gy-1 {
	--bs-gutter-y: 0.25rem;
}
.g-2,
.gx-2 {
	--bs-gutter-x: 0.5rem;
}
.g-2,
.gy-2 {
	--bs-gutter-y: 0.5rem;
}
.g-3,
.gx-3 {
	--bs-gutter-x: 1rem;
}
.g-3,
.gy-3 {
	--bs-gutter-y: 1rem;
}
.g-4,
.gx-4 {
	--bs-gutter-x: 1.5rem;
}
.g-4,
.gy-4 {
	--bs-gutter-y: 1.5rem;
}
.g-5,
.gx-5 {
	--bs-gutter-x: 3rem;
}
.g-5,
.gy-5 {
	--bs-gutter-y: 3rem;
}
@media (min-width: 576px) {
	.col-sm {
		flex: 1 0 0%;
	}
	.row-cols-sm-auto > * {
		flex: 0 0 auto;
		width: auto;
	}
	.row-cols-sm-1 > * {
		flex: 0 0 auto;
		width: 100%;
	}
	.row-cols-sm-2 > * {
		flex: 0 0 auto;
		width: 50%;
	}
	.row-cols-sm-3 > * {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.row-cols-sm-4 > * {
		flex: 0 0 auto;
		width: 25%;
	}
	.row-cols-sm-5 > * {
		flex: 0 0 auto;
		width: 20%;
	}
	.row-cols-sm-6 > * {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-sm-auto {
		flex: 0 0 auto;
		width: auto;
	}
	.col-sm-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.col-sm-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-sm-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.col-sm-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.col-sm-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.col-sm-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.col-sm-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.col-sm-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.col-sm-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.col-sm-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.col-sm-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.col-sm-12 {
		flex: 0 0 auto;
		width: 100%;
	}
	.offset-sm-0 {
		margin-left: 0;
	}
	.offset-sm-1 {
		margin-left: 8.3333333333%;
	}
	.offset-sm-2 {
		margin-left: 16.6666666667%;
	}
	.offset-sm-3 {
		margin-left: 25%;
	}
	.offset-sm-4 {
		margin-left: 33.3333333333%;
	}
	.offset-sm-5 {
		margin-left: 41.6666666667%;
	}
	.offset-sm-6 {
		margin-left: 50%;
	}
	.offset-sm-7 {
		margin-left: 58.3333333333%;
	}
	.offset-sm-8 {
		margin-left: 66.6666666667%;
	}
	.offset-sm-9 {
		margin-left: 75%;
	}
	.offset-sm-10 {
		margin-left: 83.3333333333%;
	}
	.offset-sm-11 {
		margin-left: 91.6666666667%;
	}
	.g-sm-0,
	.gx-sm-0 {
		--bs-gutter-x: 0;
	}
	.g-sm-0,
	.gy-sm-0 {
		--bs-gutter-y: 0;
	}
	.g-sm-1,
	.gx-sm-1 {
		--bs-gutter-x: 0.25rem;
	}
	.g-sm-1,
	.gy-sm-1 {
		--bs-gutter-y: 0.25rem;
	}
	.g-sm-2,
	.gx-sm-2 {
		--bs-gutter-x: 0.5rem;
	}
	.g-sm-2,
	.gy-sm-2 {
		--bs-gutter-y: 0.5rem;
	}
	.g-sm-3,
	.gx-sm-3 {
		--bs-gutter-x: 1rem;
	}
	.g-sm-3,
	.gy-sm-3 {
		--bs-gutter-y: 1rem;
	}
	.g-sm-4,
	.gx-sm-4 {
		--bs-gutter-x: 1.5rem;
	}
	.g-sm-4,
	.gy-sm-4 {
		--bs-gutter-y: 1.5rem;
	}
	.g-sm-5,
	.gx-sm-5 {
		--bs-gutter-x: 3rem;
	}
	.g-sm-5,
	.gy-sm-5 {
		--bs-gutter-y: 3rem;
	}
}
@media (min-width: 768px) {
	.col-md {
		flex: 1 0 0%;
	}
	.row-cols-md-auto > * {
		flex: 0 0 auto;
		width: auto;
	}
	.row-cols-md-1 > * {
		flex: 0 0 auto;
		width: 100%;
	}
	.row-cols-md-2 > * {
		flex: 0 0 auto;
		width: 50%;
	}
	.row-cols-md-3 > * {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.row-cols-md-4 > * {
		flex: 0 0 auto;
		width: 25%;
	}
	.row-cols-md-5 > * {
		flex: 0 0 auto;
		width: 20%;
	}
	.row-cols-md-6 > * {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-md-auto {
		flex: 0 0 auto;
		width: auto;
	}
	.col-md-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.col-md-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-md-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.col-md-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.col-md-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.col-md-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.col-md-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.col-md-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.col-md-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.col-md-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.col-md-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.col-md-12 {
		flex: 0 0 auto;
		width: 100%;
	}
	.offset-md-0 {
		margin-left: 0;
	}
	.offset-md-1 {
		margin-left: 8.3333333333%;
	}
	.offset-md-2 {
		margin-left: 16.6666666667%;
	}
	.offset-md-3 {
		margin-left: 25%;
	}
	.offset-md-4 {
		margin-left: 33.3333333333%;
	}
	.offset-md-5 {
		margin-left: 41.6666666667%;
	}
	.offset-md-6 {
		margin-left: 50%;
	}
	.offset-md-7 {
		margin-left: 58.3333333333%;
	}
	.offset-md-8 {
		margin-left: 66.6666666667%;
	}
	.offset-md-9 {
		margin-left: 75%;
	}
	.offset-md-10 {
		margin-left: 83.3333333333%;
	}
	.offset-md-11 {
		margin-left: 91.6666666667%;
	}
	.g-md-0,
	.gx-md-0 {
		--bs-gutter-x: 0;
	}
	.g-md-0,
	.gy-md-0 {
		--bs-gutter-y: 0;
	}
	.g-md-1,
	.gx-md-1 {
		--bs-gutter-x: 0.25rem;
	}
	.g-md-1,
	.gy-md-1 {
		--bs-gutter-y: 0.25rem;
	}
	.g-md-2,
	.gx-md-2 {
		--bs-gutter-x: 0.5rem;
	}
	.g-md-2,
	.gy-md-2 {
		--bs-gutter-y: 0.5rem;
	}
	.g-md-3,
	.gx-md-3 {
		--bs-gutter-x: 1rem;
	}
	.g-md-3,
	.gy-md-3 {
		--bs-gutter-y: 1rem;
	}
	.g-md-4,
	.gx-md-4 {
		--bs-gutter-x: 1.5rem;
	}
	.g-md-4,
	.gy-md-4 {
		--bs-gutter-y: 1.5rem;
	}
	.g-md-5,
	.gx-md-5 {
		--bs-gutter-x: 3rem;
	}
	.g-md-5,
	.gy-md-5 {
		--bs-gutter-y: 3rem;
	}
}
@media (min-width: 992px) {
	.col-lg {
		flex: 1 0 0%;
	}
	.row-cols-lg-auto > * {
		flex: 0 0 auto;
		width: auto;
	}
	.row-cols-lg-1 > * {
		flex: 0 0 auto;
		width: 100%;
	}
	.row-cols-lg-2 > * {
		flex: 0 0 auto;
		width: 50%;
	}
	.row-cols-lg-3 > * {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.row-cols-lg-4 > * {
		flex: 0 0 auto;
		width: 25%;
	}
	.row-cols-lg-5 > * {
		flex: 0 0 auto;
		width: 20%;
	}
	.row-cols-lg-6 > * {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-lg-auto {
		flex: 0 0 auto;
		width: auto;
	}
	.col-lg-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.col-lg-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-lg-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.col-lg-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.col-lg-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.col-lg-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.col-lg-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.col-lg-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.col-lg-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.col-lg-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.col-lg-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.col-lg-12 {
		flex: 0 0 auto;
		width: 100%;
	}
	.offset-lg-0 {
		margin-left: 0;
	}
	.offset-lg-1 {
		margin-left: 8.3333333333%;
	}
	.offset-lg-2 {
		margin-left: 16.6666666667%;
	}
	.offset-lg-3 {
		margin-left: 25%;
	}
	.offset-lg-4 {
		margin-left: 33.3333333333%;
	}
	.offset-lg-5 {
		margin-left: 41.6666666667%;
	}
	.offset-lg-6 {
		margin-left: 50%;
	}
	.offset-lg-7 {
		margin-left: 58.3333333333%;
	}
	.offset-lg-8 {
		margin-left: 66.6666666667%;
	}
	.offset-lg-9 {
		margin-left: 75%;
	}
	.offset-lg-10 {
		margin-left: 83.3333333333%;
	}
	.offset-lg-11 {
		margin-left: 91.6666666667%;
	}
	.g-lg-0,
	.gx-lg-0 {
		--bs-gutter-x: 0;
	}
	.g-lg-0,
	.gy-lg-0 {
		--bs-gutter-y: 0;
	}
	.g-lg-1,
	.gx-lg-1 {
		--bs-gutter-x: 0.25rem;
	}
	.g-lg-1,
	.gy-lg-1 {
		--bs-gutter-y: 0.25rem;
	}
	.g-lg-2,
	.gx-lg-2 {
		--bs-gutter-x: 0.5rem;
	}
	.g-lg-2,
	.gy-lg-2 {
		--bs-gutter-y: 0.5rem;
	}
	.g-lg-3,
	.gx-lg-3 {
		--bs-gutter-x: 1rem;
	}
	.g-lg-3,
	.gy-lg-3 {
		--bs-gutter-y: 1rem;
	}
	.g-lg-4,
	.gx-lg-4 {
		--bs-gutter-x: 1.5rem;
	}
	.g-lg-4,
	.gy-lg-4 {
		--bs-gutter-y: 1.5rem;
	}
	.g-lg-5,
	.gx-lg-5 {
		--bs-gutter-x: 3rem;
	}
	.g-lg-5,
	.gy-lg-5 {
		--bs-gutter-y: 3rem;
	}
}
@media (min-width: 1200px) {
	.col-xl {
		flex: 1 0 0%;
	}
	.row-cols-xl-auto > * {
		flex: 0 0 auto;
		width: auto;
	}
	.row-cols-xl-1 > * {
		flex: 0 0 auto;
		width: 100%;
	}
	.row-cols-xl-2 > * {
		flex: 0 0 auto;
		width: 50%;
	}
	.row-cols-xl-3 > * {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.row-cols-xl-4 > * {
		flex: 0 0 auto;
		width: 25%;
	}
	.row-cols-xl-5 > * {
		flex: 0 0 auto;
		width: 20%;
	}
	.row-cols-xl-6 > * {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-xl-auto {
		flex: 0 0 auto;
		width: auto;
	}
	.col-xl-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.col-xl-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-xl-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.col-xl-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.col-xl-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.col-xl-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.col-xl-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.col-xl-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.col-xl-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.col-xl-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.col-xl-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.col-xl-12 {
		flex: 0 0 auto;
		width: 100%;
	}
	.offset-xl-0 {
		margin-left: 0;
	}
	.offset-xl-1 {
		margin-left: 8.3333333333%;
	}
	.offset-xl-2 {
		margin-left: 16.6666666667%;
	}
	.offset-xl-3 {
		margin-left: 25%;
	}
	.offset-xl-4 {
		margin-left: 33.3333333333%;
	}
	.offset-xl-5 {
		margin-left: 41.6666666667%;
	}
	.offset-xl-6 {
		margin-left: 50%;
	}
	.offset-xl-7 {
		margin-left: 58.3333333333%;
	}
	.offset-xl-8 {
		margin-left: 66.6666666667%;
	}
	.offset-xl-9 {
		margin-left: 75%;
	}
	.offset-xl-10 {
		margin-left: 83.3333333333%;
	}
	.offset-xl-11 {
		margin-left: 91.6666666667%;
	}
	.g-xl-0,
	.gx-xl-0 {
		--bs-gutter-x: 0;
	}
	.g-xl-0,
	.gy-xl-0 {
		--bs-gutter-y: 0;
	}
	.g-xl-1,
	.gx-xl-1 {
		--bs-gutter-x: 0.25rem;
	}
	.g-xl-1,
	.gy-xl-1 {
		--bs-gutter-y: 0.25rem;
	}
	.g-xl-2,
	.gx-xl-2 {
		--bs-gutter-x: 0.5rem;
	}
	.g-xl-2,
	.gy-xl-2 {
		--bs-gutter-y: 0.5rem;
	}
	.g-xl-3,
	.gx-xl-3 {
		--bs-gutter-x: 1rem;
	}
	.g-xl-3,
	.gy-xl-3 {
		--bs-gutter-y: 1rem;
	}
	.g-xl-4,
	.gx-xl-4 {
		--bs-gutter-x: 1.5rem;
	}
	.g-xl-4,
	.gy-xl-4 {
		--bs-gutter-y: 1.5rem;
	}
	.g-xl-5,
	.gx-xl-5 {
		--bs-gutter-x: 3rem;
	}
	.g-xl-5,
	.gy-xl-5 {
		--bs-gutter-y: 3rem;
	}
}
@media (min-width: 1400px) {
	.col-xxl {
		flex: 1 0 0%;
	}
	.row-cols-xxl-auto > * {
		flex: 0 0 auto;
		width: auto;
	}
	.row-cols-xxl-1 > * {
		flex: 0 0 auto;
		width: 100%;
	}
	.row-cols-xxl-2 > * {
		flex: 0 0 auto;
		width: 50%;
	}
	.row-cols-xxl-3 > * {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.row-cols-xxl-4 > * {
		flex: 0 0 auto;
		width: 25%;
	}
	.row-cols-xxl-5 > * {
		flex: 0 0 auto;
		width: 20%;
	}
	.row-cols-xxl-6 > * {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-xxl-auto {
		flex: 0 0 auto;
		width: auto;
	}
	.col-xxl-1 {
		flex: 0 0 auto;
		width: 8.3333333333%;
	}
	.col-xxl-2 {
		flex: 0 0 auto;
		width: 16.6666666667%;
	}
	.col-xxl-3 {
		flex: 0 0 auto;
		width: 25%;
	}
	.col-xxl-4 {
		flex: 0 0 auto;
		width: 33.3333333333%;
	}
	.col-xxl-5 {
		flex: 0 0 auto;
		width: 41.6666666667%;
	}
	.col-xxl-6 {
		flex: 0 0 auto;
		width: 50%;
	}
	.col-xxl-7 {
		flex: 0 0 auto;
		width: 58.3333333333%;
	}
	.col-xxl-8 {
		flex: 0 0 auto;
		width: 66.6666666667%;
	}
	.col-xxl-9 {
		flex: 0 0 auto;
		width: 75%;
	}
	.col-xxl-10 {
		flex: 0 0 auto;
		width: 83.3333333333%;
	}
	.col-xxl-11 {
		flex: 0 0 auto;
		width: 91.6666666667%;
	}
	.col-xxl-12 {
		flex: 0 0 auto;
		width: 100%;
	}
	.offset-xxl-0 {
		margin-left: 0;
	}
	.offset-xxl-1 {
		margin-left: 8.3333333333%;
	}
	.offset-xxl-2 {
		margin-left: 16.6666666667%;
	}
	.offset-xxl-3 {
		margin-left: 25%;
	}
	.offset-xxl-4 {
		margin-left: 33.3333333333%;
	}
	.offset-xxl-5 {
		margin-left: 41.6666666667%;
	}
	.offset-xxl-6 {
		margin-left: 50%;
	}
	.offset-xxl-7 {
		margin-left: 58.3333333333%;
	}
	.offset-xxl-8 {
		margin-left: 66.6666666667%;
	}
	.offset-xxl-9 {
		margin-left: 75%;
	}
	.offset-xxl-10 {
		margin-left: 83.3333333333%;
	}
	.offset-xxl-11 {
		margin-left: 91.6666666667%;
	}
	.g-xxl-0,
	.gx-xxl-0 {
		--bs-gutter-x: 0;
	}
	.g-xxl-0,
	.gy-xxl-0 {
		--bs-gutter-y: 0;
	}
	.g-xxl-1,
	.gx-xxl-1 {
		--bs-gutter-x: 0.25rem;
	}
	.g-xxl-1,
	.gy-xxl-1 {
		--bs-gutter-y: 0.25rem;
	}
	.g-xxl-2,
	.gx-xxl-2 {
		--bs-gutter-x: 0.5rem;
	}
	.g-xxl-2,
	.gy-xxl-2 {
		--bs-gutter-y: 0.5rem;
	}
	.g-xxl-3,
	.gx-xxl-3 {
		--bs-gutter-x: 1rem;
	}
	.g-xxl-3,
	.gy-xxl-3 {
		--bs-gutter-y: 1rem;
	}
	.g-xxl-4,
	.gx-xxl-4 {
		--bs-gutter-x: 1.5rem;
	}
	.g-xxl-4,
	.gy-xxl-4 {
		--bs-gutter-y: 1.5rem;
	}
	.g-xxl-5,
	.gx-xxl-5 {
		--bs-gutter-x: 3rem;
	}
	.g-xxl-5,
	.gy-xxl-5 {
		--bs-gutter-y: 3rem;
	}
}
.table {
	--bs-table-bg: transparent;
	--bs-table-striped-color: var(--bs-dark);
	--bs-table-striped-bg: rgba(0, 0, 0, 0.05);
	--bs-table-active-color: var(--bs-dark);
	--bs-table-active-bg: rgba(0, 0, 0, 0.1);
	--bs-table-hover-color: var(--bs-dark);
	--bs-table-hover-bg: rgba(0, 0, 0, 0.075);
	width: 100%;
	margin-bottom: 1rem;
	color: var(--bs-dark);
	vertical-align: top;
	border-color: #dee2e6;
}
.table > :not(caption) > * > * {
	padding: 0.5rem 0.5rem;
	background-color: var(--bs-table-bg);
	background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg));
	border-bottom-width: 1px;
}
.table > tbody {
	vertical-align: inherit;
}
.table > thead {
	vertical-align: bottom;
}
.table > :not(:last-child) > :last-child > * {
	border-bottom-color: currentColor;
}
.caption-top {
	caption-side: top;
}
.table-sm > :not(caption) > * > * {
	padding: 0.25rem 0.25rem;
}
.table-bordered > :not(caption) > * {
	border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
	border-width: 0 1px;
}
.table-borderless > :not(caption) > * > * {
	border-bottom-width: 0;
}
.table-striped > tbody > tr:nth-of-type(odd) {
	--bs-table-accent-bg: var(--bs-table-striped-bg);
	color: var(--bs-table-striped-color);
}
.table-active {
	--bs-table-accent-bg: var(--bs-table-active-bg);
	color: var(--bs-table-active-color);
}
.table-hover > tbody > tr:hover {
	--bs-table-accent-bg: var(--bs-table-hover-bg);
	color: var(--bs-table-hover-color);
}
.table-primary {
	--bs-table-bg: #cfe2ff;
	--bs-table-striped-bg: #c5d7f2;
	--bs-table-striped-color: #000;
	--bs-table-active-bg: #bacbe6;
	--bs-table-active-color: #000;
	--bs-table-hover-bg: #bfd1ec;
	--bs-table-hover-color: #000;
	color: #000;
	border-color: #bacbe6;
}
.table-secondary {
	--bs-table-bg: #e2e3e5;
	--bs-table-striped-bg: #d7d8da;
	--bs-table-striped-color: #000;
	--bs-table-active-bg: #cbccce;
	--bs-table-active-color: #000;
	--bs-table-hover-bg: #d1d2d4;
	--bs-table-hover-color: #000;
	color: #000;
	border-color: #cbccce;
}
.table-success {
	--bs-table-bg: #d1e7dd;
	--bs-table-striped-bg: #c7dbd2;
	--bs-table-striped-color: #000;
	--bs-table-active-bg: #bcd0c7;
	--bs-table-active-color: #000;
	--bs-table-hover-bg: #c1d6cc;
	--bs-table-hover-color: #000;
	color: #000;
	border-color: #bcd0c7;
}
.table-info {
	--bs-table-bg: #cff4fc;
	--bs-table-striped-bg: #c5e8ef;
	--bs-table-striped-color: #000;
	--bs-table-active-bg: #badce3;
	--bs-table-active-color: #000;
	--bs-table-hover-bg: #bfe2e9;
	--bs-table-hover-color: #000;
	color: #000;
	border-color: #badce3;
}
.table-warning {
	--bs-table-bg: var(--bs-white) 3cd;
	--bs-table-striped-bg: #f2e7c3;
	--bs-table-striped-color: #000;
	--bs-table-active-bg: #e6dbb9;
	--bs-table-active-color: #000;
	--bs-table-hover-bg: #ece1be;
	--bs-table-hover-color: #000;
	color: #000;
	border-color: #e6dbb9;
}
.table-danger {
	--bs-table-bg: #f8d7da;
	--bs-table-striped-bg: #eccccf;
	--bs-table-striped-color: #000;
	--bs-table-active-bg: #dfc2c4;
	--bs-table-active-color: #000;
	--bs-table-hover-bg: #e5c7ca;
	--bs-table-hover-color: #000;
	color: #000;
	border-color: #dfc2c4;
}
.table-light {
	--bs-table-bg: var(--bs-light);
	--bs-table-striped-bg: #ecedee;
	--bs-table-striped-color: #000;
	--bs-table-active-bg: #dfe0e1;
	--bs-table-active-color: #000;
	--bs-table-hover-bg: #e5e6e7;
	--bs-table-hover-color: #000;
	color: #000;
	border-color: #dfe0e1;
}
.table-dark {
	--bs-table-bg: var(--bs-dark);
	--bs-table-striped-bg: #2c3034;
	--bs-table-striped-color: var(--bs-white);
	--bs-table-active-bg: #373b3e;
	--bs-table-active-color: var(--bs-white);
	--bs-table-hover-bg: #323539;
	--bs-table-hover-color: var(--bs-white);
	color: var(--bs-white);
	border-color: #373b3e;
}
.table-responsive {
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
}
@media (max-width: 575.98px) {
	.table-responsive-sm {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
}
@media (max-width: 767.98px) {
	.table-responsive-md {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
}
@media (max-width: 991.98px) {
	.table-responsive-lg {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
}
@media (max-width: 1199.98px) {
	.table-responsive-xl {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
}
@media (max-width: 1399.98px) {
	.table-responsive-xxl {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
}
.form-label {
	margin-bottom: 0.5rem;
}
.col-form-label {
	padding-top: calc(0.375rem + 1px);
	padding-bottom: calc(0.375rem + 1px);
	margin-bottom: 0;
	font-size: inherit;
	line-height: 1.5;
}
.col-form-label-lg {
	padding-top: calc(0.5rem + 1px);
	padding-bottom: calc(0.5rem + 1px);
	font-size: 1.25rem;
}
.col-form-label-sm {
	padding-top: calc(0.25rem + 1px);
	padding-bottom: calc(0.25rem + 1px);
	font-size: 0.875rem;
}
.form-text {
	margin-top: 0.25rem;
	font-size: 0.875em;
	color: var(--bs-gray);
}
.form-control {
	display: block;
	width: 100%;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: var(--bs-dark);
	background-color: var(--bs-white);
	background-clip: padding-box;
	border: 1px solid #ced4da;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	.form-control {
		transition: none;
	}
}
.form-control[type='file'] {
	overflow: hidden;
}
.form-control[type='file']:not(:disabled):not([readonly]) {
	cursor: pointer;
}
.form-control:focus {
	color: var(--bs-dark);
	background-color: var(--bs-white);
	border-color: #86b7fe;
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
	height: 1.5em;
}
.form-control::-webkit-input-placeholder {
	color: var(--bs-gray);
	opacity: 1;
}
.form-control::-moz-placeholder {
	color: var(--bs-gray);
	opacity: 1;
}
.form-control::placeholder {
	color: var(--bs-gray);
	opacity: 1;
}
.form-control:disabled,
.form-control[readonly] {
	background-color: #e9ecef;
	opacity: 1;
}
.form-control::file-selector-button {
	padding: 0.375rem 0.75rem;
	margin: -0.375rem -0.75rem;
	-webkit-margin-end: 0.75rem;
	margin-inline-end: 0.75rem;
	color: var(--bs-dark);
	background-color: #e9ecef;
	pointer-events: none;
	border-color: inherit;
	border-style: solid;
	border-width: 0;
	border-inline-end-width: 1px;
	border-radius: 0;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	.form-control::file-selector-button {
		transition: none;
	}
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
	background-color: #dde0e3;
}
.form-control::-webkit-file-upload-button {
	padding: 0.375rem 0.75rem;
	margin: -0.375rem -0.75rem;
	-webkit-margin-end: 0.75rem;
	margin-inline-end: 0.75rem;
	color: var(--bs-dark);
	background-color: #e9ecef;
	pointer-events: none;
	border-color: inherit;
	border-style: solid;
	border-width: 0;
	border-inline-end-width: 1px;
	border-radius: 0;
	-webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	.form-control::-webkit-file-upload-button {
		-webkit-transition: none;
		transition: none;
	}
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
	background-color: #dde0e3;
}
.form-control-plaintext {
	display: block;
	width: 100%;
	padding: 0.375rem 0;
	margin-bottom: 0;
	line-height: 1.5;
	color: var(--bs-dark);
	background-color: transparent;
	border: solid transparent;
	border-width: 1px 0;
}
.form-control-plaintext.form-control-lg,
.form-control-plaintext.form-control-sm {
	padding-right: 0;
	padding-left: 0;
}
.form-control-sm {
	min-height: calc(1.5em + 0.5rem + 2px);
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	border-radius: 0.2rem;
}
.form-control-sm::file-selector-button {
	padding: 0.25rem 0.5rem;
	margin: -0.25rem -0.5rem;
	-webkit-margin-end: 0.5rem;
	margin-inline-end: 0.5rem;
}
.form-control-sm::-webkit-file-upload-button {
	padding: 0.25rem 0.5rem;
	margin: -0.25rem -0.5rem;
	-webkit-margin-end: 0.5rem;
	margin-inline-end: 0.5rem;
}
.form-control-lg {
	min-height: calc(1.5em + 1rem + 2px);
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
}
.form-control-lg::file-selector-button {
	padding: 0.5rem 1rem;
	margin: -0.5rem -1rem;
	-webkit-margin-end: 1rem;
	margin-inline-end: 1rem;
}
.form-control-lg::-webkit-file-upload-button {
	padding: 0.5rem 1rem;
	margin: -0.5rem -1rem;
	-webkit-margin-end: 1rem;
	margin-inline-end: 1rem;
}
textarea.form-control {
	min-height: calc(1.5em + 0.75rem + 2px);
}
textarea.form-control-sm {
	min-height: calc(1.5em + 0.5rem + 2px);
}
textarea.form-control-lg {
	min-height: calc(1.5em + 1rem + 2px);
}
.form-control-color {
	max-width: 3rem;
	height: auto;
	padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
	cursor: pointer;
}
.form-control-color::-moz-color-swatch {
	height: 1.5em;
	border-radius: 0.25rem;
}
.form-control-color::-webkit-color-swatch {
	height: 1.5em;
	border-radius: 0.25rem;
}
.form-select {
	display: block;
	width: 100%;
	padding: 0.375rem 1.75rem 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: var(--bs-dark);
	background-color: var(--bs-white);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right 0.75rem center;
	background-size: 16px 12px;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.form-select:focus {
	border-color: #86b7fe;
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple],
.form-select[size]:not([size='1']) {
	padding-right: 0.75rem;
	background-image: none;
}
.form-select:disabled {
	color: var(--bs-gray);
	background-color: #e9ecef;
}
.form-select:-moz-focusring {
	color: transparent;
	text-shadow: 0 0 0 var(--bs-dark);
}
.form-select-sm {
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-left: 0.5rem;
	font-size: 0.875rem;
}
.form-select-lg {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	font-size: 1.25rem;
}
.form-check {
	display: block;
	min-height: 1.5rem;
	padding-left: 1.5em;
	margin-bottom: 0.125rem;
}
.form-check .form-check-input {
	float: left;
	margin-left: -1.5em;
}
.form-check-input {
	width: 1em;
	height: 1em;
	margin-top: 0.25em;
	vertical-align: top;
	background-color: var(--bs-white);
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	border: 1px solid rgba(0, 0, 0, 0.25);
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	-webkit-print-color-adjust: exact;
	color-adjust: exact;
	transition: background-color 0.15s ease-in-out, background-position 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	.form-check-input {
		transition: none;
	}
}
.form-check-input[type='checkbox'] {
	border-radius: 0.25em;
}
.form-check-input[type='radio'] {
	border-radius: 50%;
}
.form-check-input:active {
	filter: brightness(90%);
}
.form-check-input:focus {
	border-color: #86b7fe;
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
	background-color: var(--bs-blue);
	border-color: var(--bs-blue);
}
.form-check-input:checked[type='checkbox'] {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type='radio'] {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type='checkbox']:indeterminate {
	background-color: var(--bs-blue);
	border-color: var(--bs-blue);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
	pointer-events: none;
	filter: none;
	opacity: 0.5;
}
.form-check-input:disabled ~ .form-check-label,
.form-check-input[disabled] ~ .form-check-label {
	opacity: 0.5;
}
.form-switch {
	padding-left: 2.5em;
}
.form-switch .form-check-input {
	width: 2em;
	margin-left: -2.5em;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
	background-position: left center;
	border-radius: 2em;
}
.form-switch .form-check-input:focus {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
	background-position: right center;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-inline {
	display: inline-block;
	margin-right: 1rem;
}
.btn-check {
	position: absolute;
	clip: rect(0, 0, 0, 0);
	pointer-events: none;
}
.btn-check:disabled + .btn,
.btn-check[disabled] + .btn {
	pointer-events: none;
	filter: none;
	opacity: 0.65;
}
.form-range {
	width: 100%;
	height: 1.5rem;
	padding: 0;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.form-range:focus {
	outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
	box-shadow: 0 0 0 1px var(--bs-white), 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
	box-shadow: 0 0 0 1px var(--bs-white), 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
	border: 0;
}
.form-range::-webkit-slider-thumb {
	width: 1rem;
	height: 1rem;
	margin-top: -0.25rem;
	background-color: var(--bs-blue);
	border: 0;
	border-radius: 1rem;
	-webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	-webkit-appearance: none;
	appearance: none;
}
@media (prefers-reduced-motion: reduce) {
	.form-range::-webkit-slider-thumb {
		-webkit-transition: none;
		transition: none;
	}
}
.form-range::-webkit-slider-thumb:active {
	background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
	width: 100%;
	height: 0.5rem;
	color: transparent;
	cursor: pointer;
	background-color: #dee2e6;
	border-color: transparent;
	border-radius: 1rem;
}
.form-range::-moz-range-thumb {
	width: 1rem;
	height: 1rem;
	background-color: var(--bs-blue);
	border: 0;
	border-radius: 1rem;
	-moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	-moz-appearance: none;
	appearance: none;
}
@media (prefers-reduced-motion: reduce) {
	.form-range::-moz-range-thumb {
		-moz-transition: none;
		transition: none;
	}
}
.form-range::-moz-range-thumb:active {
	background-color: #b6d4fe;
}
.form-range::-moz-range-track {
	width: 100%;
	height: 0.5rem;
	color: transparent;
	cursor: pointer;
	background-color: #dee2e6;
	border-color: transparent;
	border-radius: 1rem;
}
.form-range:disabled {
	pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
	background-color: #adb5bd;
}
.form-range:disabled::-moz-range-thumb {
	background-color: #adb5bd;
}
.form-floating {
	position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
	height: calc(3.5rem + 2px);
	padding: 1rem 0.75rem;
}
.form-floating > label {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	padding: 1rem 0.75rem;
	pointer-events: none;
	border: 1px solid transparent;
	transform-origin: 0 0;
	transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	.form-floating > label {
		transition: none;
	}
}
.form-floating > .form-control::-webkit-input-placeholder {
	color: transparent;
}
.form-floating > .form-control::-moz-placeholder {
	color: transparent;
}
.form-floating > .form-control::placeholder {
	color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus,
.form-floating > .form-control:not(:placeholder-shown) {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
}
.form-floating > .form-select {
	padding-top: 1.625rem;
	padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
	opacity: 0.65;
	transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
	opacity: 0.65;
	transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
	opacity: 0.65;
	transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.input-group {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;
	width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
	position: relative;
	flex: 1 1 auto;
	width: 1%;
	min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
	z-index: 3;
}
.input-group .btn {
	position: relative;
	z-index: 2;
}
.input-group .btn:focus {
	z-index: 3;
}
.input-group-text {
	display: flex;
	align-items: center;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: var(--bs-dark);
	text-align: center;
	white-space: nowrap;
	background-color: #e9ecef;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
}
.input-group-lg > .btn,
.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text {
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
}
.input-group-sm > .btn,
.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text {
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	border-radius: 0.2rem;
}
.input-group-lg > .form-select,
.input-group-sm > .form-select {
	padding-right: 1.75rem;
}
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3),
.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4),
.input-group.has-validation > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.input-group
	> :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
	margin-left: -1px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.valid-feedback {
	display: none;
	width: 100%;
	margin-top: 0.25rem;
	font-size: 0.875em;
	color: var(--bs-green);
}
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip,
.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip {
	display: block;
}
.form-control.is-valid,
.was-validated .form-control:valid {
	border-color: var(--bs-green);
	padding-right: calc(1.5em + 0.75rem);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right calc(0.375em + 0.1875rem) center;
	background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.form-control.is-valid:focus,
.was-validated .form-control:valid:focus {
	border-color: var(--bs-green);
	box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
	padding-right: calc(1.5em + 0.75rem);
	background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}
.form-select.is-valid,
.was-validated .form-select:valid {
	border-color: var(--bs-green);
	padding-right: calc(0.75em + 2.3125rem);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
		url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
	background-position: right 0.75rem center, center right 1.75rem;
	background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.form-select.is-valid:focus,
.was-validated .form-select:valid:focus {
	border-color: var(--bs-green);
	box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.form-check-input.is-valid,
.was-validated .form-check-input:valid {
	border-color: var(--bs-green);
}
.form-check-input.is-valid:checked,
.was-validated .form-check-input:valid:checked {
	background-color: var(--bs-green);
}
.form-check-input.is-valid:focus,
.was-validated .form-check-input:valid:focus {
	box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.form-check-input.is-valid ~ .form-check-label,
.was-validated .form-check-input:valid ~ .form-check-label {
	color: var(--bs-green);
}
.form-check-inline .form-check-input ~ .valid-feedback {
	margin-left: 0.5em;
}
.invalid-feedback {
	display: none;
	width: 100%;
	margin-top: 0.25rem;
	font-size: 0.875em;
	color: var(--bs-red);
}
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip,
.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip {
	display: block;
}
.form-control.is-invalid,
.was-validated .form-control:invalid {
	border-color: var(--bs-red);
	padding-right: calc(1.5em + 0.75rem);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right calc(0.375em + 0.1875rem) center;
	background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
	border-color: var(--bs-red);
	box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
	padding-right: calc(1.5em + 0.75rem);
	background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}
.form-select.is-invalid,
.was-validated .form-select:invalid {
	border-color: var(--bs-red);
	padding-right: calc(0.75em + 2.3125rem);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
		url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
	background-position: right 0.75rem center, center right 1.75rem;
	background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.form-select.is-invalid:focus,
.was-validated .form-select:invalid:focus {
	border-color: var(--bs-red);
	box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.form-check-input.is-invalid,
.was-validated .form-check-input:invalid {
	border-color: var(--bs-red);
}
.form-check-input.is-invalid:checked,
.was-validated .form-check-input:invalid:checked {
	background-color: var(--bs-red);
}
.form-check-input.is-invalid:focus,
.was-validated .form-check-input:invalid:focus {
	box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.form-check-input.is-invalid ~ .form-check-label,
.was-validated .form-check-input:invalid ~ .form-check-label {
	color: var(--bs-red);
}
.form-check-inline .form-check-input ~ .invalid-feedback {
	margin-left: 0.5em;
}
.btn {
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: var(--bs-dark);
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	.btn {
		transition: none;
	}
}
.btn:hover {
	color: var(--bs-dark);
}
.btn-check:focus + .btn,
.btn:focus {
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn.disabled,
.btn:disabled,
fieldset:disabled .btn {
	pointer-events: none;
	opacity: 0.65;
}
.btn-primary {
	color: var(--bs-white);
	background-color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
	border-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
}
.btn-primary:hover {
	color: var(--bs-white);
	background-color: ${({ dark }) => (dark ? '#ff44a0' : '#0d68e3')};
	border-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
}
.btn-check:focus + .btn-primary,
.btn-primary:focus {
	color: var(--bs-white);
	background-color: ${({ dark }) => (dark ? '#ff44a0' : '#0d68e3')};
	border-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
	box-shadow: ${({ dark }) => (dark ? 'none' : `0 0 0 0.25rem ${highlights.blue}`)};
}
.btn-secondary {
	color: var(--bs-white);
	background-color: var(--bs-gray);
	border-color: var(--bs-gray);
}
.btn-secondary:hover {
	color: var(--bs-white);
	background-color: #5c636a;
	border-color: #565e64;
}
.btn-check:focus + .btn-secondary,
.btn-secondary:focus {
	color: var(--bs-white);
	background-color: #5c636a;
	border-color: #565e64;
	box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-check:active + .btn-secondary,
.btn-check:checked + .btn-secondary,
.btn-secondary.active,
.btn-secondary:active,
.show > .btn-secondary.dropdown-toggle {
	color: var(--bs-white);
	background-color: #565e64;
	border-color: #51585e;
}
.btn-check:active + .btn-secondary:focus,
.btn-check:checked + .btn-secondary:focus,
.btn-secondary.active:focus,
.btn-secondary:active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-secondary.disabled,
.btn-secondary:disabled {
	color: var(--bs-white);
	background-color: var(--bs-gray);
	border-color: var(--bs-gray);
}
.btn-success {
	color: var(--bs-white);
	background-color: var(--bs-green);
	border-color: var(--bs-green);
}
.btn-success:hover {
	color: var(--bs-white);
	background-color: #157347;
	border-color: #146c43;
}
.btn-check:focus + .btn-success,
.btn-success:focus {
	color: var(--bs-white);
	background-color: #157347;
	border-color: #146c43;
	box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:active + .btn-success,
.btn-check:checked + .btn-success,
.btn-success.active,
.btn-success:active,
.show > .btn-success.dropdown-toggle {
	color: var(--bs-white);
	background-color: #146c43;
	border-color: #13653f;
}
.btn-check:active + .btn-success:focus,
.btn-check:checked + .btn-success:focus,
.btn-success.active:focus,
.btn-success:active:focus,
.show > .btn-success.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-success.disabled,
.btn-success:disabled {
	color: var(--bs-white);
	background-color: var(--bs-green);
	border-color: var(--bs-green);
}
.btn-info {
	color: #000;
	background-color: var(--bs-cyan);
	border-color: var(--bs-cyan);
}
.btn-info:hover {
	color: #000;
	background-color: #31d2f2;
	border-color: #25cff2;
}
.btn-check:focus + .btn-info,
.btn-info:focus {
	color: #000;
	background-color: #31d2f2;
	border-color: #25cff2;
	box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:active + .btn-info,
.btn-check:checked + .btn-info,
.btn-info.active,
.btn-info:active,
.show > .btn-info.dropdown-toggle {
	color: #000;
	background-color: #3dd5f3;
	border-color: #25cff2;
}
.btn-check:active + .btn-info:focus,
.btn-check:checked + .btn-info:focus,
.btn-info.active:focus,
.btn-info:active:focus,
.show > .btn-info.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-info.disabled,
.btn-info:disabled {
	color: #000;
	background-color: var(--bs-cyan);
	border-color: var(--bs-cyan);
}
.btn-warning {
	color: #000;
	background-color: var(--bs-yellow);
	border-color: var(--bs-yellow);
}
.btn-warning:hover {
	color: #000;
	background-color: #ffca2c;
	border-color: #ffc720;
}
.btn-check:focus + .btn-warning,
.btn-warning:focus {
	color: #000;
	background-color: #ffca2c;
	border-color: #ffc720;
	box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:active + .btn-warning,
.btn-check:checked + .btn-warning,
.btn-warning.active,
.btn-warning:active,
.show > .btn-warning.dropdown-toggle {
	color: #000;
	background-color: #ffcd39;
	border-color: #ffc720;
}
.btn-check:active + .btn-warning:focus,
.btn-check:checked + .btn-warning:focus,
.btn-warning.active:focus,
.btn-warning:active:focus,
.show > .btn-warning.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-warning.disabled,
.btn-warning:disabled {
	color: #000;
	background-color: var(--bs-yellow);
	border-color: var(--bs-yellow);
}
.btn-danger {
	color: var(--bs-white);
	background-color: var(--bs-red);
	border-color: var(--bs-red);
}
.btn-danger:hover {
	color: var(--bs-white);
	background-color: #bb2d3b;
	border-color: #b02a37;
}
.btn-check:focus + .btn-danger,
.btn-danger:focus {
	color: var(--bs-white);
	background-color: #bb2d3b;
	border-color: #b02a37;
	box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:active + .btn-danger,
.btn-check:checked + .btn-danger,
.btn-danger.active,
.btn-danger:active,
.show > .btn-danger.dropdown-toggle {
	color: var(--bs-white);
	background-color: #b02a37;
	border-color: #a52834;
}
.btn-check:active + .btn-danger:focus,
.btn-check:checked + .btn-danger:focus,
.btn-danger.active:focus,
.btn-danger:active:focus,
.show > .btn-danger.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger.disabled,
.btn-danger:disabled {
	color: var(--bs-white);
	background-color: var(--bs-red);
	border-color: var(--bs-red);
}
.btn-light {
	color: #000;
	background-color: var(--bs-light);
	border-color: var(--bs-light);
}
.btn-light:hover {
	color: #000;
	background-color: #f9fafb;
	border-color: #f9fafb;
}
.btn-check:focus + .btn-light,
.btn-light:focus {
	color: #000;
	background-color: #f9fafb;
	border-color: #f9fafb;
	box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-check:active + .btn-light,
.btn-check:checked + .btn-light,
.btn-light.active,
.btn-light:active,
.show > .btn-light.dropdown-toggle {
	color: #000;
	background-color: #f9fafb;
	border-color: #f9fafb;
}
.btn-check:active + .btn-light:focus,
.btn-check:checked + .btn-light:focus,
.btn-light.active:focus,
.btn-light:active:focus,
.show > .btn-light.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-light.disabled,
.btn-light:disabled {
	color: #000;
	background-color: var(--bs-light);
	border-color: var(--bs-light);
}
.btn-dark {
	color: var(--bs-white);
	background-color: var(--bs-dark);
	border-color: var(--bs-dark);
}
.btn-dark:hover {
	color: var(--bs-white);
	background-color: #1c1f23;
	border-color: #1a1e21;
}
.btn-check:focus + .btn-dark,
.btn-dark:focus {
	color: var(--bs-white);
	background-color: #1c1f23;
	border-color: #1a1e21;
	box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-check:active + .btn-dark,
.btn-check:checked + .btn-dark,
.btn-dark.active,
.btn-dark:active,
.show > .btn-dark.dropdown-toggle {
	color: var(--bs-white);
	background-color: #1a1e21;
	border-color: #191c1f;
}
.btn-check:active + .btn-dark:focus,
.btn-check:checked + .btn-dark:focus,
.btn-dark.active:focus,
.btn-dark:active:focus,
.show > .btn-dark.dropdown-toggle:focus {
	box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-dark.disabled,
.btn-dark:disabled {
	color: var(--bs-white);
	background-color: var(--bs-dark);
	border-color: var(--bs-dark);
}
.btn-outline-primary {
	color: var(--bs-blue);
	border-color: var(--bs-blue);
}
.btn-outline-primary:hover {
	color: var(--bs-white);
	background-color: var(--bs-blue);
	border-color: var(--bs-blue);
}
.btn-check:focus + .btn-outline-primary,
.btn-outline-primary:focus {
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-check:active + .btn-outline-primary,
.btn-check:checked + .btn-outline-primary,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:active {
	color: var(--bs-white);
	background-color: var(--bs-blue);
	border-color: var(--bs-blue);
}
.btn-check:active + .btn-outline-primary:focus,
.btn-check:checked + .btn-outline-primary:focus,
.btn-outline-primary.active:focus,
.btn-outline-primary.dropdown-toggle.show:focus,
.btn-outline-primary:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
	color: var(--bs-blue);
	background-color: transparent;
}
.btn-outline-secondary {
	color: var(--bs-gray);
	border-color: var(--bs-gray);
}
.btn-outline-secondary:hover {
	color: var(--bs-white);
	background-color: var(--bs-gray);
	border-color: var(--bs-gray);
}
.btn-check:focus + .btn-outline-secondary,
.btn-outline-secondary:focus {
	box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-check:active + .btn-outline-secondary,
.btn-check:checked + .btn-outline-secondary,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show,
.btn-outline-secondary:active {
	color: var(--bs-white);
	background-color: var(--bs-gray);
	border-color: var(--bs-gray);
}
.btn-check:active + .btn-outline-secondary:focus,
.btn-check:checked + .btn-outline-secondary:focus,
.btn-outline-secondary.active:focus,
.btn-outline-secondary.dropdown-toggle.show:focus,
.btn-outline-secondary:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
	color: var(--bs-gray);
	background-color: transparent;
}
.btn-outline-success {
	color: var(--bs-green);
	border-color: var(--bs-green);
}
.btn-outline-success:hover {
	color: var(--bs-white);
	background-color: var(--bs-green);
	border-color: var(--bs-green);
}
.btn-check:focus + .btn-outline-success,
.btn-outline-success:focus {
	box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:active + .btn-outline-success,
.btn-check:checked + .btn-outline-success,
.btn-outline-success.active,
.btn-outline-success.dropdown-toggle.show,
.btn-outline-success:active {
	color: var(--bs-white);
	background-color: var(--bs-green);
	border-color: var(--bs-green);
}
.btn-check:active + .btn-outline-success:focus,
.btn-check:checked + .btn-outline-success:focus,
.btn-outline-success.active:focus,
.btn-outline-success.dropdown-toggle.show:focus,
.btn-outline-success:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
	color: var(--bs-green);
	background-color: transparent;
}
.btn-outline-info {
	color: var(--bs-cyan);
	border-color: var(--bs-cyan);
}
.btn-outline-info:hover {
	color: #000;
	background-color: var(--bs-cyan);
	border-color: var(--bs-cyan);
}
.btn-check:focus + .btn-outline-info,
.btn-outline-info:focus {
	box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:active + .btn-outline-info,
.btn-check:checked + .btn-outline-info,
.btn-outline-info.active,
.btn-outline-info.dropdown-toggle.show,
.btn-outline-info:active {
	color: #000;
	background-color: var(--bs-cyan);
	border-color: var(--bs-cyan);
}
.btn-check:active + .btn-outline-info:focus,
.btn-check:checked + .btn-outline-info:focus,
.btn-outline-info.active:focus,
.btn-outline-info.dropdown-toggle.show:focus,
.btn-outline-info:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
	color: var(--bs-cyan);
	background-color: transparent;
}
.btn-outline-warning {
	color: var(--bs-yellow);
	border-color: var(--bs-yellow);
}
.btn-outline-warning:hover {
	color: #000;
	background-color: var(--bs-yellow);
	border-color: var(--bs-yellow);
}
.btn-check:focus + .btn-outline-warning,
.btn-outline-warning:focus {
	box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:active + .btn-outline-warning,
.btn-check:checked + .btn-outline-warning,
.btn-outline-warning.active,
.btn-outline-warning.dropdown-toggle.show,
.btn-outline-warning:active {
	color: #000;
	background-color: var(--bs-yellow);
	border-color: var(--bs-yellow);
}
.btn-check:active + .btn-outline-warning:focus,
.btn-check:checked + .btn-outline-warning:focus,
.btn-outline-warning.active:focus,
.btn-outline-warning.dropdown-toggle.show:focus,
.btn-outline-warning:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
	color: var(--bs-yellow);
	background-color: transparent;
}
.btn-outline-danger {
	color: var(--bs-red);
	border-color: var(--bs-red);
}
.btn-outline-danger:hover {
	color: var(--bs-white);
	background-color: var(--bs-red);
	border-color: var(--bs-red);
}
.btn-check:focus + .btn-outline-danger,
.btn-outline-danger:focus {
	box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:active + .btn-outline-danger,
.btn-check:checked + .btn-outline-danger,
.btn-outline-danger.active,
.btn-outline-danger.dropdown-toggle.show,
.btn-outline-danger:active {
	color: var(--bs-white);
	background-color: var(--bs-red);
	border-color: var(--bs-red);
}
.btn-check:active + .btn-outline-danger:focus,
.btn-check:checked + .btn-outline-danger:focus,
.btn-outline-danger.active:focus,
.btn-outline-danger.dropdown-toggle.show:focus,
.btn-outline-danger:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
	color: var(--bs-red);
	background-color: transparent;
}
.btn-outline-light {
	color: var(--bs-light);
	border-color: var(--bs-light);
}
.btn-outline-light:hover {
	color: #000;
	background-color: var(--bs-light);
	border-color: var(--bs-light);
}
.btn-check:focus + .btn-outline-light,
.btn-outline-light:focus {
	box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-check:active + .btn-outline-light,
.btn-check:checked + .btn-outline-light,
.btn-outline-light.active,
.btn-outline-light.dropdown-toggle.show,
.btn-outline-light:active {
	color: #000;
	background-color: var(--bs-light);
	border-color: var(--bs-light);
}
.btn-check:active + .btn-outline-light:focus,
.btn-check:checked + .btn-outline-light:focus,
.btn-outline-light.active:focus,
.btn-outline-light.dropdown-toggle.show:focus,
.btn-outline-light:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
	color: var(--bs-light);
	background-color: transparent;
}
.btn-outline-dark {
	color: var(--bs-dark);
	border-color: var(--bs-dark);
}
.btn-outline-dark:hover {
	color: var(--bs-white);
	background-color: var(--bs-dark);
	border-color: var(--bs-dark);
}
.btn-check:focus + .btn-outline-dark,
.btn-outline-dark:focus {
	box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-check:active + .btn-outline-dark,
.btn-check:checked + .btn-outline-dark,
.btn-outline-dark.active,
.btn-outline-dark.dropdown-toggle.show,
.btn-outline-dark:active {
	color: var(--bs-white);
	background-color: var(--bs-dark);
	border-color: var(--bs-dark);
}
.btn-check:active + .btn-outline-dark:focus,
.btn-check:checked + .btn-outline-dark:focus,
.btn-outline-dark.active:focus,
.btn-outline-dark.dropdown-toggle.show:focus,
.btn-outline-dark:active:focus {
	box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
	color: var(--bs-dark);
	background-color: transparent;
}
.btn-link {
	font-weight: 400;
	color: var(--bs-blue);
	text-decoration: underline;
}
.btn-link:hover {
	color: #0a58ca;
}
.btn-link.disabled,
.btn-link:disabled {
	color: var(--bs-gray);
}
.btn-group-lg > .btn,
.btn-lg {
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
}
.btn-group-sm > .btn,
.btn-sm {
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	border-radius: 0.2rem;
}
.btn-group,
.btn-group-vertical {
	position: relative;
	display: inline-flex;
	vertical-align: middle;
}
.btn-group-vertical > .btn,
.btn-group > .btn {
	position: relative;
	flex: 1 1 auto;
}
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn.active,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:hover,
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn.active,
.btn-group > .btn:active,
.btn-group > .btn:focus,
.btn-group > .btn:hover {
	z-index: 1;
}
.btn-toolbar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.btn-toolbar .input-group {
	width: auto;
}
.btn-group > .btn-group:not(:first-child),
.btn-group > .btn:not(:first-child) {
	margin-left: -1px;
}
.btn-group > .btn-group:not(:last-child) > .btn,
.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.btn-group > .btn-group:not(:first-child) > .btn,
.btn-group > .btn:nth-child(n + 3),
.btn-group > :not(.btn-check) + .btn {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.dropdown-toggle-split {
	padding-right: 0.5625rem;
	padding-left: 0.5625rem;
}
.dropdown-toggle-split::after,
.dropend .dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after {
	margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
	margin-right: 0;
}
.btn-group-sm > .btn + .dropdown-toggle-split,
.btn-sm + .dropdown-toggle-split {
	padding-right: 0.375rem;
	padding-left: 0.375rem;
}
.btn-group-lg > .btn + .dropdown-toggle-split,
.btn-lg + .dropdown-toggle-split {
	padding-right: 0.75rem;
	padding-left: 0.75rem;
}
.btn-group-vertical {
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
	width: 100%;
}
.btn-group-vertical > .btn-group:not(:first-child),
.btn-group-vertical > .btn:not(:first-child) {
	margin-top: -1px;
}
.btn-group-vertical > .btn-group:not(:last-child) > .btn,
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:not(:first-child) > .btn,
.btn-group-vertical > .btn ~ .btn {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: var(--bs-white);
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
}
.card > hr {
	margin-right: 0;
	margin-left: 0;
}
.card > .list-group {
	border-top: inherit;
	border-bottom: inherit;
}
.card > .list-group:first-child {
	border-top-width: 0;
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
	border-bottom-width: 0;
	border-bottom-right-radius: calc(0.25rem - 1px);
	border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
	border-top: 0;
}
.card-body {
	flex: 1 1 auto;
	padding: 1rem 1rem;
}
.card-title {
	margin-bottom: 0.5rem;
}
.card-subtitle {
	margin-top: -0.25rem;
	margin-bottom: 0;
}
.card-text:last-child {
	margin-bottom: 0;
}
.card-link:hover {
	text-decoration: none;
}
.card-link + .card-link {
	margin-left: 1rem;
}
.card-header {
	padding: 0.5rem 1rem;
	margin-bottom: 0;
	background-color: rgba(0, 0, 0, 0.03);
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
	border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
.card-footer {
	padding: 0.5rem 1rem;
	background-color: rgba(0, 0, 0, 0.03);
	border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
	border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}
.card-header-tabs {
	margin-right: -0.5rem;
	margin-bottom: -0.5rem;
	margin-left: -0.5rem;
	border-bottom: 0;
}
.card-header-pills {
	margin-right: -0.5rem;
	margin-left: -0.5rem;
}
.card-img-overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1rem;
	border-radius: calc(0.25rem - 1px);
}
.card-img,
.card-img-bottom,
.card-img-top {
	width: 100%;
}
.card-img,
.card-img-top {
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
}
.card-img,
.card-img-bottom {
	border-bottom-right-radius: calc(0.25rem - 1px);
	border-bottom-left-radius: calc(0.25rem - 1px);
}
.card-group > .card {
	margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
	.card-group {
		display: flex;
		flex-flow: row wrap;
	}
	.card-group > .card {
		flex: 1 0 0%;
		margin-bottom: 0;
	}
	.card-group > .card + .card {
		margin-left: 0;
		border-left: 0;
	}
	.card-group > .card:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	.card-group > .card:not(:last-child) .card-header,
	.card-group > .card:not(:last-child) .card-img-top {
		border-top-right-radius: 0;
	}
	.card-group > .card:not(:last-child) .card-footer,
	.card-group > .card:not(:last-child) .card-img-bottom {
		border-bottom-right-radius: 0;
	}
	.card-group > .card:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.card-group > .card:not(:first-child) .card-header,
	.card-group > .card:not(:first-child) .card-img-top {
		border-top-left-radius: 0;
	}
	.card-group > .card:not(:first-child) .card-footer,
	.card-group > .card:not(:first-child) .card-img-bottom {
		border-bottom-left-radius: 0;
	}
}
.pagination {
	display: flex;
	padding-left: 0;
	list-style: none;
}
.page-link {
	position: relative;
	display: block;
	color: var(--bs-blue);
	text-decoration: none;
	background-color: var(--bs-white);
	border: 1px solid #dee2e6;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	.page-link {
		transition: none;
	}
}
.page-link:hover {
	z-index: 2;
	color: #0a58ca;
	background-color: #e9ecef;
	border-color: #dee2e6;
}
.page-link:focus {
	z-index: 3;
	color: #0a58ca;
	background-color: #e9ecef;
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.page-item:not(:first-child) .page-link {
	margin-left: -1px;
}
.page-item.active .page-link {
	z-index: 3;
	color: var(--bs-white);
	background-color: var(--bs-blue);
	border-color: var(--bs-blue);
}
.page-item.disabled .page-link {
	color: var(--bs-gray);
	pointer-events: none;
	background-color: var(--bs-white);
	border-color: #dee2e6;
}
.page-link {
	padding: 0.375rem 0.75rem;
}
.page-item:first-child .page-link {
	border-top-left-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
	border-top-right-radius: 0.25rem;
	border-bottom-right-radius: 0.25rem;
}
.pagination-lg .page-link {
	padding: 0.75rem 1.5rem;
	font-size: 1.25rem;
}
.pagination-lg .page-item:first-child .page-link {
	border-top-left-radius: 0.3rem;
	border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
	border-top-right-radius: 0.3rem;
	border-bottom-right-radius: 0.3rem;
}
.pagination-sm .page-link {
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
}
.pagination-sm .page-item:first-child .page-link {
	border-top-left-radius: 0.2rem;
	border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
}
.badge {
	display: inline-block;
	padding: 0.35em 0.65em;
	font-size: 0.75em;
	font-weight: 700;
	line-height: 1;
	color: var(--bs-white);
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: 0.25rem;
}
.badge:empty {
	display: none;
}
.btn .badge {
	position: relative;
	top: -1px;
}
.alert {
	position: relative;
	padding: 1rem 1rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
}
.alert-heading {
	color: inherit;
}
.alert-link {
	font-weight: 700;
}
.alert-primary {
	color: #084298;
	background-color: #cfe2ff;
	border-color: #b6d4fe;
}
.alert-primary .alert-link {
	color: #06357a;
}
.alert-secondary {
	color: #41464b;
	background-color: #e2e3e5;
	border-color: #d3d6d8;
}
.alert-secondary .alert-link {
	color: #34383c;
}
.alert-success {
	color: #0f5132;
	background-color: #d1e7dd;
	border-color: #badbcc;
}
.alert-success .alert-link {
	color: #0c4128;
}
.alert-info {
	color: #055160;
	background-color: #cff4fc;
	border-color: #b6effb;
}
.alert-info .alert-link {
	color: #04414d;
}
.alert-warning {
	color: #664d03;
	background-color: var(--bs-white) 3cd;
	border-color: #ffecb5;
}
.alert-warning .alert-link {
	color: #523e02;
}
.alert-danger {
	color: #842029;
	background-color: #f8d7da;
	border-color: #f5c2c7;
}
.alert-danger .alert-link {
	color: #6a1a21;
}
.alert-light {
	color: #636464;
	background-color: #fefefe;
	border-color: #fdfdfe;
}
.alert-light .alert-link {
	color: #4f5050;
}
.alert-dark {
	color: #141619;
	background-color: #d3d3d4;
	border-color: #bcbebf;
}
.alert-dark .alert-link {
	color: #101214;
}
@-webkit-keyframes progress-bar-stripes {
	0% {
		background-position-x: 1rem;
	}
}
@keyframes progress-bar-stripes {
	0% {
		background-position-x: 1rem;
	}
}
.progress {
	display: flex;
	height: 1rem;
	overflow: hidden;
	font-size: 0.75rem;
	background-color: #e9ecef;
	border-radius: 0.25rem;
}
.progress-bar {
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	color: var(--bs-white);
	text-align: center;
	white-space: nowrap;
	background-color: var(--bs-blue);
	transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
	.progress-bar {
		transition: none;
	}
}
.progress-bar-striped {
	background-image: linear-gradient(
		45deg,
		rgba(255, 255, 255, 0.15) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 255, 255, 0.15) 50%,
		rgba(255, 255, 255, 0.15) 75%,
		transparent 75%,
		transparent
	);
	background-size: 1rem 1rem;
}
.progress-bar-animated {
	-webkit-animation: 1s linear infinite progress-bar-stripes;
	animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
	.progress-bar-animated {
		-webkit-animation: none;
		animation: none;
	}
}
.list-group {
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	border-radius: 0.25rem;
}
.list-group-item-action {
	width: 100%;
	color: #495057;
	text-align: inherit;
}
.list-group-item-action:focus,
.list-group-item-action:hover {
	z-index: 1;
	color: #495057;
	text-decoration: none;
}
.list-group-item-action:active {
	color: var(--bs-dark);
	background-color: #e9ecef;
}
.list-group-item {
	position: relative;
	display: block;
	padding: 0.5rem 1rem;
	text-decoration: none;
	border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
	border-top-left-radius: inherit;
	border-top-right-radius: inherit;
}
.list-group-item:last-child {
	border-bottom-right-radius: inherit;
	border-bottom-left-radius: inherit;
}
.list-group-item.disabled,
.list-group-item:disabled {
	color: var(--bs-gray);
	pointer-events: none;
	background-color: var(--bs-white);
}
.list-group-item.active {
	z-index: 2;
	color: var(--bs-white);
	background-color: var(--bs-blue);
	border-color: var(--bs-blue);
}
.list-group-item + .list-group-item {
	border-top-width: 0;
}
.list-group-item + .list-group-item.active {
	margin-top: -1px;
	border-top-width: 1px;
}
.list-group-horizontal {
	flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
	border-bottom-left-radius: 0.25rem;
	border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
	border-top-right-radius: 0.25rem;
	border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
	margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
	border-top-width: 1px;
	border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
	margin-left: -1px;
	border-left-width: 1px;
}
@media (min-width: 576px) {
	.list-group-horizontal-sm {
		flex-direction: row;
	}
	.list-group-horizontal-sm > .list-group-item:first-child {
		border-bottom-left-radius: 0.25rem;
		border-top-right-radius: 0;
	}
	.list-group-horizontal-sm > .list-group-item:last-child {
		border-top-right-radius: 0.25rem;
		border-bottom-left-radius: 0;
	}
	.list-group-horizontal-sm > .list-group-item.active {
		margin-top: 0;
	}
	.list-group-horizontal-sm > .list-group-item + .list-group-item {
		border-top-width: 1px;
		border-left-width: 0;
	}
	.list-group-horizontal-sm > .list-group-item + .list-group-item.active {
		margin-left: -1px;
		border-left-width: 1px;
	}
}
@media (min-width: 768px) {
	.list-group-horizontal-md {
		flex-direction: row;
	}
	.list-group-horizontal-md > .list-group-item:first-child {
		border-bottom-left-radius: 0.25rem;
		border-top-right-radius: 0;
	}
	.list-group-horizontal-md > .list-group-item:last-child {
		border-top-right-radius: 0.25rem;
		border-bottom-left-radius: 0;
	}
	.list-group-horizontal-md > .list-group-item.active {
		margin-top: 0;
	}
	.list-group-horizontal-md > .list-group-item + .list-group-item {
		border-top-width: 1px;
		border-left-width: 0;
	}
	.list-group-horizontal-md > .list-group-item + .list-group-item.active {
		margin-left: -1px;
		border-left-width: 1px;
	}
}
@media (min-width: 992px) {
	.list-group-horizontal-lg {
		flex-direction: row;
	}
	.list-group-horizontal-lg > .list-group-item:first-child {
		border-bottom-left-radius: 0.25rem;
		border-top-right-radius: 0;
	}
	.list-group-horizontal-lg > .list-group-item:last-child {
		border-top-right-radius: 0.25rem;
		border-bottom-left-radius: 0;
	}
	.list-group-horizontal-lg > .list-group-item.active {
		margin-top: 0;
	}
	.list-group-horizontal-lg > .list-group-item + .list-group-item {
		border-top-width: 1px;
		border-left-width: 0;
	}
	.list-group-horizontal-lg > .list-group-item + .list-group-item.active {
		margin-left: -1px;
		border-left-width: 1px;
	}
}
@media (min-width: 1200px) {
	.list-group-horizontal-xl {
		flex-direction: row;
	}
	.list-group-horizontal-xl > .list-group-item:first-child {
		border-bottom-left-radius: 0.25rem;
		border-top-right-radius: 0;
	}
	.list-group-horizontal-xl > .list-group-item:last-child {
		border-top-right-radius: 0.25rem;
		border-bottom-left-radius: 0;
	}
	.list-group-horizontal-xl > .list-group-item.active {
		margin-top: 0;
	}
	.list-group-horizontal-xl > .list-group-item + .list-group-item {
		border-top-width: 1px;
		border-left-width: 0;
	}
	.list-group-horizontal-xl > .list-group-item + .list-group-item.active {
		margin-left: -1px;
		border-left-width: 1px;
	}
}
@media (min-width: 1400px) {
	.list-group-horizontal-xxl {
		flex-direction: row;
	}
	.list-group-horizontal-xxl > .list-group-item:first-child {
		border-bottom-left-radius: 0.25rem;
		border-top-right-radius: 0;
	}
	.list-group-horizontal-xxl > .list-group-item:last-child {
		border-top-right-radius: 0.25rem;
		border-bottom-left-radius: 0;
	}
	.list-group-horizontal-xxl > .list-group-item.active {
		margin-top: 0;
	}
	.list-group-horizontal-xxl > .list-group-item + .list-group-item {
		border-top-width: 1px;
		border-left-width: 0;
	}
	.list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
		margin-left: -1px;
		border-left-width: 1px;
	}
}
.list-group-flush {
	border-radius: 0;
}
.list-group-flush > .list-group-item {
	border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
	border-bottom-width: 0;
}
.list-group-item-primary {
	color: #084298;
	background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:focus,
.list-group-item-primary.list-group-item-action:hover {
	color: #084298;
	background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #084298;
	border-color: #084298;
}
.list-group-item-secondary {
	color: #41464b;
	background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:focus,
.list-group-item-secondary.list-group-item-action:hover {
	color: #41464b;
	background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #41464b;
	border-color: #41464b;
}
.list-group-item-success {
	color: #0f5132;
	background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:focus,
.list-group-item-success.list-group-item-action:hover {
	color: #0f5132;
	background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #0f5132;
	border-color: #0f5132;
}
.list-group-item-info {
	color: #055160;
	background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:focus,
.list-group-item-info.list-group-item-action:hover {
	color: #055160;
	background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #055160;
	border-color: #055160;
}
.list-group-item-warning {
	color: #664d03;
	background-color: var(--bs-white) 3cd;
}
.list-group-item-warning.list-group-item-action:focus,
.list-group-item-warning.list-group-item-action:hover {
	color: #664d03;
	background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #664d03;
	border-color: #664d03;
}
.list-group-item-danger {
	color: #842029;
	background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:focus,
.list-group-item-danger.list-group-item-action:hover {
	color: #842029;
	background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #842029;
	border-color: #842029;
}
.list-group-item-light {
	color: #636464;
	background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:focus,
.list-group-item-light.list-group-item-action:hover {
	color: #636464;
	background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #636464;
	border-color: #636464;
}
.list-group-item-dark {
	color: #141619;
	background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:focus,
.list-group-item-dark.list-group-item-action:hover {
	color: #141619;
	background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
	color: var(--bs-white);
	background-color: #141619;
	border-color: #141619;
}

.clearfix::after {
	display: block;
	clear: both;
	content: '';
}
.link-primary {
	color: var(--bs-blue);
}
.link-primary:focus,
.link-primary:hover {
	color: #0a58ca;
}
.link-secondary {
	color: var(--bs-gray);
}
.link-secondary:focus,
.link-secondary:hover {
	color: #565e64;
}
.link-success {
	color: var(--bs-green);
}
.link-success:focus,
.link-success:hover {
	color: #146c43;
}
.link-info {
	color: var(--bs-cyan);
}
.link-info:focus,
.link-info:hover {
	color: #3dd5f3;
}
.link-warning {
	color: var(--bs-yellow);
}
.link-warning:focus,
.link-warning:hover {
	color: #ffcd39;
}
.link-danger {
	color: var(--bs-red);
}
.link-danger:focus,
.link-danger:hover {
	color: #b02a37;
}
.link-light {
	color: var(--bs-light);
}
.link-light:focus,
.link-light:hover {
	color: #f9fafb;
}
.link-dark {
	color: var(--bs-dark);
}
.link-dark:focus,
.link-dark:hover {
	color: #1a1e21;
}
.ratio {
	position: relative;
	width: 100%;
}
.ratio::before {
	display: block;
	padding-top: var(--aspect-ratio);
	content: '';
}
.ratio > * {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.ratio-1x1 {
	--aspect-ratio: 100%;
}
.ratio-4x3 {
	--aspect-ratio: calc(3 / 4 * 100%);
}
.ratio-16x9 {
	--aspect-ratio: calc(9 / 16 * 100%);
}
.ratio-21x9 {
	--aspect-ratio: calc(9 / 21 * 100%);
}
.fixed-top {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1030;
}
.fixed-bottom {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1030;
}
.sticky-top {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	z-index: 1020;
}
@media (min-width: 576px) {
	.sticky-sm-top {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1020;
	}
}
@media (min-width: 768px) {
	.sticky-md-top {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1020;
	}
}
@media (min-width: 992px) {
	.sticky-lg-top {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1020;
	}
}
@media (min-width: 1200px) {
	.sticky-xl-top {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1020;
	}
}
@media (min-width: 1400px) {
	.sticky-xxl-top {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1020;
	}
}
.visually-hidden,
.visually-hidden-focusable:not(:focus) {
	position: absolute !important;
	width: 1px !important;
	height: 1px !important;
	padding: 0 !important;
	margin: -1px !important;
	overflow: hidden !important;
	clip: rect(0, 0, 0, 0) !important;
	white-space: nowrap !important;
	border: 0 !important;
}
.stretched-link::after {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	content: '';
}
.text-truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.align-baseline {
	vertical-align: baseline !important;
}
.align-top {
	vertical-align: top !important;
}
.align-middle {
	vertical-align: middle !important;
}
.align-bottom {
	vertical-align: bottom !important;
}
.align-text-bottom {
	vertical-align: text-bottom !important;
}
.align-text-top {
	vertical-align: text-top !important;
}
.float-start {
	float: left !important;
}
.float-end {
	float: right !important;
}
.float-none {
	float: none !important;
}
.overflow-auto {
	overflow: auto !important;
}
.overflow-hidden {
	overflow: hidden !important;
}
.overflow-visible {
	overflow: visible !important;
}
.overflow-scroll {
	overflow: scroll !important;
}
.d-inline {
	display: inline !important;
}
.d-inline-block {
	display: inline-block !important;
}
.d-block {
	display: block !important;
}
.d-grid {
	display: grid !important;
}
.d-table {
	display: table !important;
}
.d-table-row {
	display: table-row !important;
}
.d-table-cell {
	display: table-cell !important;
}
.d-flex {
	display: flex !important;
}
.d-inline-flex {
	display: inline-flex !important;
}
.d-none {
	display: none !important;
}
.position-static {
	position: static !important;
}
.position-relative {
	position: relative !important;
}
.position-absolute {
	position: absolute !important;
}
.position-fixed {
	position: fixed !important;
}
.position-sticky {
	position: -webkit-sticky !important;
	position: sticky !important;
}
.top-0 {
	top: 0 !important;
}
.top-50 {
	top: 50% !important;
}
.top-100 {
	top: 100% !important;
}
.bottom-0 {
	bottom: 0 !important;
}
.bottom-50 {
	bottom: 50% !important;
}
.bottom-100 {
	bottom: 100% !important;
}
.start-0 {
	left: 0 !important;
}
.start-50 {
	left: 50% !important;
}
.start-100 {
	left: 100% !important;
}
.end-0 {
	right: 0 !important;
}
.end-50 {
	right: 50% !important;
}
.end-100 {
	right: 100% !important;
}
.translate-middle {
	transform: translate(-50%, -50%) !important;
}
.translate-middle-x {
	transform: translateX(-50%) !important;
}
.translate-middle-y {
	transform: translateY(-50%) !important;
}
.border {
	border: 1px solid #dee2e6 !important;
}
.border-0 {
	border: 0 !important;
}
.border-top {
	border-top: 1px solid #dee2e6 !important;
}
.border-top-0 {
	border-top: 0 !important;
}
.border-end {
	border-right: 1px solid #dee2e6 !important;
}
.border-end-0 {
	border-right: 0 !important;
}
.border-bottom {
	border-bottom: 1px solid #dee2e6 !important;
}
.border-bottom-0 {
	border-bottom: 0 !important;
}
.border-start {
	border-left: 1px solid #dee2e6 !important;
}
.border-start-0 {
	border-left: 0 !important;
}
.border-primary {
	border-color: var(--bs-blue) !important;
}
.border-secondary {
	border-color: var(--bs-gray) !important;
}
.border-success {
	border-color: var(--bs-green) !important;
}
.border-info {
	border-color: var(--bs-cyan) !important;
}
.border-warning {
	border-color: var(--bs-yellow) !important;
}
.border-danger {
	border-color: var(--bs-red) !important;
}
.border-light {
	border-color: var(--bs-light) !important;
}
.border-dark {
	border-color: var(--bs-dark) !important;
}
.border-white {
	border-color: var(--bs-white) !important;
}
.border-0 {
	border-width: 0 !important;
}
.border-1 {
	border-width: 1px !important;
}
.border-2 {
	border-width: 2px !important;
}
.border-3 {
	border-width: 3px !important;
}
.border-4 {
	border-width: 4px !important;
}
.border-5 {
	border-width: 5px !important;
}
.w-25 {
	width: 25% !important;
}
.w-50 {
	width: 50% !important;
}
.w-75 {
	width: 75% !important;
}
.w-100 {
	width: 100% !important;
}
.w-auto {
	width: auto !important;
}
.mw-100 {
	max-width: 100% !important;
}
.vw-100 {
	width: 100vw !important;
}
.min-vw-100 {
	min-width: 100vw !important;
}
.h-25 {
	height: 25% !important;
}
.h-50 {
	height: 50% !important;
}
.h-75 {
	height: 75% !important;
}
.h-100 {
	height: 100% !important;
}
.h-auto {
	height: auto !important;
}
.mh-100 {
	max-height: 100% !important;
}
.vh-100 {
	height: 100vh !important;
}
.min-vh-100 {
	min-height: 100vh !important;
}
.flex-fill {
	flex: 1 1 auto !important;
}
.flex-row {
	flex-direction: row !important;
}
.flex-column {
	flex-direction: column !important;
}
.flex-row-reverse {
	flex-direction: row-reverse !important;
}
.flex-column-reverse {
	flex-direction: column-reverse !important;
}
.flex-grow-0 {
	flex-grow: 0 !important;
}
.flex-grow-1 {
	flex-grow: 1 !important;
}
.flex-shrink-0 {
	flex-shrink: 0 !important;
}
.flex-shrink-1 {
	flex-shrink: 1 !important;
}
.flex-wrap {
	flex-wrap: wrap !important;
}
.flex-nowrap {
	flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
	flex-wrap: wrap-reverse !important;
}
.gap-0 {
	gap: 0 !important;
}
.gap-1 {
	gap: 0.25rem !important;
}
.gap-2 {
	gap: 0.5rem !important;
}
.gap-3 {
	gap: 1rem !important;
}
.gap-4 {
	gap: 1.5rem !important;
}
.gap-5 {
	gap: 3rem !important;
}
.justify-content-start {
	justify-content: flex-start !important;
}
.justify-content-end {
	justify-content: flex-end !important;
}
.justify-content-center {
	justify-content: center !important;
}
.justify-content-between {
	justify-content: space-between !important;
}
.justify-content-around {
	justify-content: space-around !important;
}
.justify-content-evenly {
	justify-content: space-evenly !important;
}
.align-items-start {
	align-items: flex-start !important;
}
.align-items-end {
	align-items: flex-end !important;
}
.align-items-center {
	align-items: center !important;
}
.align-items-baseline {
	align-items: baseline !important;
}
.align-items-stretch {
	align-items: stretch !important;
}
.align-content-start {
	align-content: flex-start !important;
}
.align-content-end {
	align-content: flex-end !important;
}
.align-content-center {
	align-content: center !important;
}
.align-content-between {
	align-content: space-between !important;
}
.align-content-around {
	align-content: space-around !important;
}
.align-content-stretch {
	align-content: stretch !important;
}
.align-self-auto {
	align-self: auto !important;
}
.align-self-start {
	align-self: flex-start !important;
}
.align-self-end {
	align-self: flex-end !important;
}
.align-self-center {
	align-self: center !important;
}
.align-self-baseline {
	align-self: baseline !important;
}
.align-self-stretch {
	align-self: stretch !important;
}
.m-0 {
	margin: 0 !important;
}
.m-1 {
	margin: 0.25rem !important;
}
.m-2 {
	margin: 0.5rem !important;
}
.m-3 {
	margin: 1rem !important;
}
.m-4 {
	margin: 1.5rem !important;
}
.m-5 {
	margin: 3rem !important;
}
.m-auto {
	margin: auto !important;
}
.mx-0 {
	margin-right: 0 !important;
	margin-left: 0 !important;
}
.mx-1 {
	margin-right: 0.25rem !important;
	margin-left: 0.25rem !important;
}
.mx-2 {
	margin-right: 0.5rem !important;
	margin-left: 0.5rem !important;
}
.mx-3 {
	margin-right: 1rem !important;
	margin-left: 1rem !important;
}
.mx-4 {
	margin-right: 1.5rem !important;
	margin-left: 1.5rem !important;
}
.mx-5 {
	margin-right: 3rem !important;
	margin-left: 3rem !important;
}
.mx-auto {
	margin-right: auto !important;
	margin-left: auto !important;
}
.my-0 {
	margin-top: 0 !important;
	margin-bottom: 0 !important;
}
.my-1 {
	margin-top: 0.25rem !important;
	margin-bottom: 0.25rem !important;
}
.my-2 {
	margin-top: 0.5rem !important;
	margin-bottom: 0.5rem !important;
}
.my-3 {
	margin-top: 1rem !important;
	margin-bottom: 1rem !important;
}
.my-4 {
	margin-top: 1.5rem !important;
	margin-bottom: 1.5rem !important;
}
.my-5 {
	margin-top: 3rem !important;
	margin-bottom: 3rem !important;
}
.my-auto {
	margin-top: auto !important;
	margin-bottom: auto !important;
}
.mt-0 {
	margin-top: 0 !important;
}
.mt-1 {
	margin-top: 0.25rem !important;
}
.mt-2 {
	margin-top: 0.5rem !important;
}
.mt-3 {
	margin-top: 1rem !important;
}
.mt-4 {
	margin-top: 1.5rem !important;
}
.mt-5 {
	margin-top: 3rem !important;
}
.mt-auto {
	margin-top: auto !important;
}
.me-0 {
	margin-right: 0 !important;
}
.me-1 {
	margin-right: 0.25rem !important;
}
.me-2 {
	margin-right: 0.5rem !important;
}
.me-3 {
	margin-right: 1rem !important;
}
.me-4 {
	margin-right: 1.5rem !important;
}
.me-5 {
	margin-right: 3rem !important;
}
.me-auto {
	margin-right: auto !important;
}
.mb-0 {
	margin-bottom: 0 !important;
}
.mb-1 {
	margin-bottom: 0.25rem !important;
}
.mb-2 {
	margin-bottom: 0.5rem !important;
}
.mb-3 {
	margin-bottom: 1rem !important;
}
.mb-4 {
	margin-bottom: 1.5rem !important;
}
.mb-5 {
	margin-bottom: 3rem !important;
}
.mb-auto {
	margin-bottom: auto !important;
}
.ms-0 {
	margin-left: 0 !important;
}
.ms-1 {
	margin-left: 0.25rem !important;
}
.ms-2 {
	margin-left: 0.5rem !important;
}
.ms-3 {
	margin-left: 1rem !important;
}
.ms-4 {
	margin-left: 1.5rem !important;
}
.ms-5 {
	margin-left: 3rem !important;
}
.ms-auto {
	margin-left: auto !important;
}
.p-0 {
	padding: 0 !important;
}
.p-1 {
	padding: 0.25rem !important;
}
.p-2 {
	padding: 0.5rem !important;
}
.p-3 {
	padding: 1rem !important;
}
.p-4 {
	padding: 1.5rem !important;
}
.p-5 {
	padding: 3rem !important;
}
.px-0 {
	padding-right: 0 !important;
	padding-left: 0 !important;
}
.px-1 {
	padding-right: 0.25rem !important;
	padding-left: 0.25rem !important;
}
.px-2 {
	padding-right: 0.5rem !important;
	padding-left: 0.5rem !important;
}
.px-3 {
	padding-right: 1rem !important;
	padding-left: 1rem !important;
}
.px-4 {
	padding-right: 1.5rem !important;
	padding-left: 1.5rem !important;
}
.px-5 {
	padding-right: 3rem !important;
	padding-left: 3rem !important;
}
.py-0 {
	padding-top: 0 !important;
	padding-bottom: 0 !important;
}
.py-1 {
	padding-top: 0.25rem !important;
	padding-bottom: 0.25rem !important;
}
.py-2 {
	padding-top: 0.5rem !important;
	padding-bottom: 0.5rem !important;
}
.py-3 {
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
}
.py-4 {
	padding-top: 1.5rem !important;
	padding-bottom: 1.5rem !important;
}
.py-5 {
	padding-top: 3rem !important;
	padding-bottom: 3rem !important;
}
.pt-0 {
	padding-top: 0 !important;
}
.pt-1 {
	padding-top: 0.25rem !important;
}
.pt-2 {
	padding-top: 0.5rem !important;
}
.pt-3 {
	padding-top: 1rem !important;
}
.pt-4 {
	padding-top: 1.5rem !important;
}
.pt-5 {
	padding-top: 3rem !important;
}
.pe-0 {
	padding-right: 0 !important;
}
.pe-1 {
	padding-right: 0.25rem !important;
}
.pe-2 {
	padding-right: 0.5rem !important;
}
.pe-3 {
	padding-right: 1rem !important;
}
.pe-4 {
	padding-right: 1.5rem !important;
}
.pe-5 {
	padding-right: 3rem !important;
}
.pb-0 {
	padding-bottom: 0 !important;
}
.pb-1 {
	padding-bottom: 0.25rem !important;
}
.pb-2 {
	padding-bottom: 0.5rem !important;
}
.pb-3 {
	padding-bottom: 1rem !important;
}
.pb-4 {
	padding-bottom: 1.5rem !important;
}
.pb-5 {
	padding-bottom: 3rem !important;
}
.ps-0 {
	padding-left: 0 !important;
}
.ps-1 {
	padding-left: 0.25rem !important;
}
.ps-2 {
	padding-left: 0.5rem !important;
}
.ps-3 {
	padding-left: 1rem !important;
}
.ps-4 {
	padding-left: 1.5rem !important;
}
.ps-5 {
	padding-left: 3rem !important;
}
.text-start {
	text-align: left !important;
}
.text-end {
	text-align: right !important;
}
.text-center {
	text-align: center !important;
}
.text-primary {
	color: var(--bs-blue) !important;
}
.text-secondary {
	color: var(--bs-gray) !important;
}
.text-success {
	color: var(--bs-green) !important;
}
.text-info {
	color: var(--bs-cyan) !important;
}
.text-warning {
	color: var(--bs-yellow) !important;
}
.text-danger {
	color: var(--bs-red) !important;
}
.text-light {
	color: var(--bs-light) !important;
}
.text-dark {
	color: var(--bs-dark) !important;
}
.text-white {
	color: var(--bs-white) !important;
}
.text-body {
	color: var(--bs-dark) !important;
}
.text-muted {
	color: var(--bs-gray) !important;
}
.text-black-50 {
	color: rgba(0, 0, 0, 0.5) !important;
}
.text-white-50 {
	color: rgba(255, 255, 255, 0.5) !important;
}
.text-reset {
	color: inherit !important;
}
.lh-1 {
	line-height: 1 !important;
}
.lh-sm {
	line-height: 1.25 !important;
}
.lh-base {
	line-height: 1.5 !important;
}
.lh-lg {
	line-height: 2 !important;
}
.bg-primary {
	background-color: var(--bs-blue) !important;
}
.bg-secondary {
	background-color: var(--bs-gray) !important;
}
.bg-success {
	background-color: var(--bs-green) !important;
}
.bg-info {
	background-color: var(--bs-cyan) !important;
}
.bg-warning {
	background-color: var(--bs-yellow) !important;
}
.bg-danger {
	background-color: var(--bs-red) !important;
}
.bg-light {
	background-color: var(--bs-light) !important;
}
.bg-dark {
	background-color: var(--bs-dark) !important;
}
.bg-body {
	background-color: var(--bs-white) !important;
}
.bg-white {
	background-color: var(--bs-white) !important;
}
.bg-transparent {
	background-color: transparent !important;
}
.bg-gradient {
	background-image: var(--bs-gradient) !important;
}
@media (min-width: 576px) {
	.float-sm-start {
		float: left !important;
	}
	.float-sm-end {
		float: right !important;
	}
	.float-sm-none {
		float: none !important;
	}
	.d-sm-inline {
		display: inline !important;
	}
	.d-sm-inline-block {
		display: inline-block !important;
	}
	.d-sm-block {
		display: block !important;
	}
	.d-sm-grid {
		display: grid !important;
	}
	.d-sm-table {
		display: table !important;
	}
	.d-sm-table-row {
		display: table-row !important;
	}
	.d-sm-table-cell {
		display: table-cell !important;
	}
	.d-sm-flex {
		display: flex !important;
	}
	.d-sm-inline-flex {
		display: inline-flex !important;
	}
	.d-sm-none {
		display: none !important;
	}
	.flex-sm-fill {
		flex: 1 1 auto !important;
	}
	.flex-sm-row {
		flex-direction: row !important;
	}
	.flex-sm-column {
		flex-direction: column !important;
	}
	.flex-sm-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-sm-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-sm-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-sm-grow-1 {
		flex-grow: 1 !important;
	}
	.flex-sm-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-sm-shrink-1 {
		flex-shrink: 1 !important;
	}
	.flex-sm-wrap {
		flex-wrap: wrap !important;
	}
	.flex-sm-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-sm-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.gap-sm-0 {
		gap: 0 !important;
	}
	.gap-sm-1 {
		gap: 0.25rem !important;
	}
	.gap-sm-2 {
		gap: 0.5rem !important;
	}
	.gap-sm-3 {
		gap: 1rem !important;
	}
	.gap-sm-4 {
		gap: 1.5rem !important;
	}
	.gap-sm-5 {
		gap: 3rem !important;
	}
	.justify-content-sm-start {
		justify-content: flex-start !important;
	}
	.justify-content-sm-end {
		justify-content: flex-end !important;
	}
	.justify-content-sm-center {
		justify-content: center !important;
	}
	.justify-content-sm-between {
		justify-content: space-between !important;
	}
	.justify-content-sm-around {
		justify-content: space-around !important;
	}
	.justify-content-sm-evenly {
		justify-content: space-evenly !important;
	}
	.align-items-sm-start {
		align-items: flex-start !important;
	}
	.align-items-sm-end {
		align-items: flex-end !important;
	}
	.align-items-sm-center {
		align-items: center !important;
	}
	.align-items-sm-baseline {
		align-items: baseline !important;
	}
	.align-items-sm-stretch {
		align-items: stretch !important;
	}
	.align-content-sm-start {
		align-content: flex-start !important;
	}
	.align-content-sm-end {
		align-content: flex-end !important;
	}
	.align-content-sm-center {
		align-content: center !important;
	}
	.align-content-sm-between {
		align-content: space-between !important;
	}
	.align-content-sm-around {
		align-content: space-around !important;
	}
	.align-content-sm-stretch {
		align-content: stretch !important;
	}
	.align-self-sm-auto {
		align-self: auto !important;
	}
	.align-self-sm-start {
		align-self: flex-start !important;
	}
	.align-self-sm-end {
		align-self: flex-end !important;
	}
	.align-self-sm-center {
		align-self: center !important;
	}
	.align-self-sm-baseline {
		align-self: baseline !important;
	}
	.align-self-sm-stretch {
		align-self: stretch !important;
	}
	.m-sm-0 {
		margin: 0 !important;
	}
	.m-sm-1 {
		margin: 0.25rem !important;
	}
	.m-sm-2 {
		margin: 0.5rem !important;
	}
	.m-sm-3 {
		margin: 1rem !important;
	}
	.m-sm-4 {
		margin: 1.5rem !important;
	}
	.m-sm-5 {
		margin: 3rem !important;
	}
	.m-sm-auto {
		margin: auto !important;
	}
	.mx-sm-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.mx-sm-1 {
		margin-right: 0.25rem !important;
		margin-left: 0.25rem !important;
	}
	.mx-sm-2 {
		margin-right: 0.5rem !important;
		margin-left: 0.5rem !important;
	}
	.mx-sm-3 {
		margin-right: 1rem !important;
		margin-left: 1rem !important;
	}
	.mx-sm-4 {
		margin-right: 1.5rem !important;
		margin-left: 1.5rem !important;
	}
	.mx-sm-5 {
		margin-right: 3rem !important;
		margin-left: 3rem !important;
	}
	.mx-sm-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
	.my-sm-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.my-sm-1 {
		margin-top: 0.25rem !important;
		margin-bottom: 0.25rem !important;
	}
	.my-sm-2 {
		margin-top: 0.5rem !important;
		margin-bottom: 0.5rem !important;
	}
	.my-sm-3 {
		margin-top: 1rem !important;
		margin-bottom: 1rem !important;
	}
	.my-sm-4 {
		margin-top: 1.5rem !important;
		margin-bottom: 1.5rem !important;
	}
	.my-sm-5 {
		margin-top: 3rem !important;
		margin-bottom: 3rem !important;
	}
	.my-sm-auto {
		margin-top: auto !important;
		margin-bottom: auto !important;
	}
	.mt-sm-0 {
		margin-top: 0 !important;
	}
	.mt-sm-1 {
		margin-top: 0.25rem !important;
	}
	.mt-sm-2 {
		margin-top: 0.5rem !important;
	}
	.mt-sm-3 {
		margin-top: 1rem !important;
	}
	.mt-sm-4 {
		margin-top: 1.5rem !important;
	}
	.mt-sm-5 {
		margin-top: 3rem !important;
	}
	.mt-sm-auto {
		margin-top: auto !important;
	}
	.me-sm-0 {
		margin-right: 0 !important;
	}
	.me-sm-1 {
		margin-right: 0.25rem !important;
	}
	.me-sm-2 {
		margin-right: 0.5rem !important;
	}
	.me-sm-3 {
		margin-right: 1rem !important;
	}
	.me-sm-4 {
		margin-right: 1.5rem !important;
	}
	.me-sm-5 {
		margin-right: 3rem !important;
	}
	.me-sm-auto {
		margin-right: auto !important;
	}
	.mb-sm-0 {
		margin-bottom: 0 !important;
	}
	.mb-sm-1 {
		margin-bottom: 0.25rem !important;
	}
	.mb-sm-2 {
		margin-bottom: 0.5rem !important;
	}
	.mb-sm-3 {
		margin-bottom: 1rem !important;
	}
	.mb-sm-4 {
		margin-bottom: 1.5rem !important;
	}
	.mb-sm-5 {
		margin-bottom: 3rem !important;
	}
	.mb-sm-auto {
		margin-bottom: auto !important;
	}
	.ms-sm-0 {
		margin-left: 0 !important;
	}
	.ms-sm-1 {
		margin-left: 0.25rem !important;
	}
	.ms-sm-2 {
		margin-left: 0.5rem !important;
	}
	.ms-sm-3 {
		margin-left: 1rem !important;
	}
	.ms-sm-4 {
		margin-left: 1.5rem !important;
	}
	.ms-sm-5 {
		margin-left: 3rem !important;
	}
	.ms-sm-auto {
		margin-left: auto !important;
	}
	.p-sm-0 {
		padding: 0 !important;
	}
	.p-sm-1 {
		padding: 0.25rem !important;
	}
	.p-sm-2 {
		padding: 0.5rem !important;
	}
	.p-sm-3 {
		padding: 1rem !important;
	}
	.p-sm-4 {
		padding: 1.5rem !important;
	}
	.p-sm-5 {
		padding: 3rem !important;
	}
	.px-sm-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.px-sm-1 {
		padding-right: 0.25rem !important;
		padding-left: 0.25rem !important;
	}
	.px-sm-2 {
		padding-right: 0.5rem !important;
		padding-left: 0.5rem !important;
	}
	.px-sm-3 {
		padding-right: 1rem !important;
		padding-left: 1rem !important;
	}
	.px-sm-4 {
		padding-right: 1.5rem !important;
		padding-left: 1.5rem !important;
	}
	.px-sm-5 {
		padding-right: 3rem !important;
		padding-left: 3rem !important;
	}
	.py-sm-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.py-sm-1 {
		padding-top: 0.25rem !important;
		padding-bottom: 0.25rem !important;
	}
	.py-sm-2 {
		padding-top: 0.5rem !important;
		padding-bottom: 0.5rem !important;
	}
	.py-sm-3 {
		padding-top: 1rem !important;
		padding-bottom: 1rem !important;
	}
	.py-sm-4 {
		padding-top: 1.5rem !important;
		padding-bottom: 1.5rem !important;
	}
	.py-sm-5 {
		padding-top: 3rem !important;
		padding-bottom: 3rem !important;
	}
	.pt-sm-0 {
		padding-top: 0 !important;
	}
	.pt-sm-1 {
		padding-top: 0.25rem !important;
	}
	.pt-sm-2 {
		padding-top: 0.5rem !important;
	}
	.pt-sm-3 {
		padding-top: 1rem !important;
	}
	.pt-sm-4 {
		padding-top: 1.5rem !important;
	}
	.pt-sm-5 {
		padding-top: 3rem !important;
	}
	.pe-sm-0 {
		padding-right: 0 !important;
	}
	.pe-sm-1 {
		padding-right: 0.25rem !important;
	}
	.pe-sm-2 {
		padding-right: 0.5rem !important;
	}
	.pe-sm-3 {
		padding-right: 1rem !important;
	}
	.pe-sm-4 {
		padding-right: 1.5rem !important;
	}
	.pe-sm-5 {
		padding-right: 3rem !important;
	}
	.pb-sm-0 {
		padding-bottom: 0 !important;
	}
	.pb-sm-1 {
		padding-bottom: 0.25rem !important;
	}
	.pb-sm-2 {
		padding-bottom: 0.5rem !important;
	}
	.pb-sm-3 {
		padding-bottom: 1rem !important;
	}
	.pb-sm-4 {
		padding-bottom: 1.5rem !important;
	}
	.pb-sm-5 {
		padding-bottom: 3rem !important;
	}
	.ps-sm-0 {
		padding-left: 0 !important;
	}
	.ps-sm-1 {
		padding-left: 0.25rem !important;
	}
	.ps-sm-2 {
		padding-left: 0.5rem !important;
	}
	.ps-sm-3 {
		padding-left: 1rem !important;
	}
	.ps-sm-4 {
		padding-left: 1.5rem !important;
	}
	.ps-sm-5 {
		padding-left: 3rem !important;
	}
	.text-sm-start {
		text-align: left !important;
	}
	.text-sm-end {
		text-align: right !important;
	}
	.text-sm-center {
		text-align: center !important;
	}
}
@media (min-width: 768px) {
	.float-md-start {
		float: left !important;
	}
	.float-md-end {
		float: right !important;
	}
	.float-md-none {
		float: none !important;
	}
	.d-md-inline {
		display: inline !important;
	}
	.d-md-inline-block {
		display: inline-block !important;
	}
	.d-md-block {
		display: block !important;
	}
	.d-md-grid {
		display: grid !important;
	}
	.d-md-table {
		display: table !important;
	}
	.d-md-table-row {
		display: table-row !important;
	}
	.d-md-table-cell {
		display: table-cell !important;
	}
	.d-md-flex {
		display: flex !important;
	}
	.d-md-inline-flex {
		display: inline-flex !important;
	}
	.d-md-none {
		display: none !important;
	}
	.flex-md-fill {
		flex: 1 1 auto !important;
	}
	.flex-md-row {
		flex-direction: row !important;
	}
	.flex-md-column {
		flex-direction: column !important;
	}
	.flex-md-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-md-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-md-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-md-grow-1 {
		flex-grow: 1 !important;
	}
	.flex-md-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-md-shrink-1 {
		flex-shrink: 1 !important;
	}
	.flex-md-wrap {
		flex-wrap: wrap !important;
	}
	.flex-md-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-md-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.gap-md-0 {
		gap: 0 !important;
	}
	.gap-md-1 {
		gap: 0.25rem !important;
	}
	.gap-md-2 {
		gap: 0.5rem !important;
	}
	.gap-md-3 {
		gap: 1rem !important;
	}
	.gap-md-4 {
		gap: 1.5rem !important;
	}
	.gap-md-5 {
		gap: 3rem !important;
	}
	.justify-content-md-start {
		justify-content: flex-start !important;
	}
	.justify-content-md-end {
		justify-content: flex-end !important;
	}
	.justify-content-md-center {
		justify-content: center !important;
	}
	.justify-content-md-between {
		justify-content: space-between !important;
	}
	.justify-content-md-around {
		justify-content: space-around !important;
	}
	.justify-content-md-evenly {
		justify-content: space-evenly !important;
	}
	.align-items-md-start {
		align-items: flex-start !important;
	}
	.align-items-md-end {
		align-items: flex-end !important;
	}
	.align-items-md-center {
		align-items: center !important;
	}
	.align-items-md-baseline {
		align-items: baseline !important;
	}
	.align-items-md-stretch {
		align-items: stretch !important;
	}
	.align-content-md-start {
		align-content: flex-start !important;
	}
	.align-content-md-end {
		align-content: flex-end !important;
	}
	.align-content-md-center {
		align-content: center !important;
	}
	.align-content-md-between {
		align-content: space-between !important;
	}
	.align-content-md-around {
		align-content: space-around !important;
	}
	.align-content-md-stretch {
		align-content: stretch !important;
	}
	.align-self-md-auto {
		align-self: auto !important;
	}
	.align-self-md-start {
		align-self: flex-start !important;
	}
	.align-self-md-end {
		align-self: flex-end !important;
	}
	.align-self-md-center {
		align-self: center !important;
	}
	.align-self-md-baseline {
		align-self: baseline !important;
	}
	.align-self-md-stretch {
		align-self: stretch !important;
	}
	.m-md-0 {
		margin: 0 !important;
	}
	.m-md-1 {
		margin: 0.25rem !important;
	}
	.m-md-2 {
		margin: 0.5rem !important;
	}
	.m-md-3 {
		margin: 1rem !important;
	}
	.m-md-4 {
		margin: 1.5rem !important;
	}
	.m-md-5 {
		margin: 3rem !important;
	}
	.m-md-auto {
		margin: auto !important;
	}
	.mx-md-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.mx-md-1 {
		margin-right: 0.25rem !important;
		margin-left: 0.25rem !important;
	}
	.mx-md-2 {
		margin-right: 0.5rem !important;
		margin-left: 0.5rem !important;
	}
	.mx-md-3 {
		margin-right: 1rem !important;
		margin-left: 1rem !important;
	}
	.mx-md-4 {
		margin-right: 1.5rem !important;
		margin-left: 1.5rem !important;
	}
	.mx-md-5 {
		margin-right: 3rem !important;
		margin-left: 3rem !important;
	}
	.mx-md-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
	.my-md-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.my-md-1 {
		margin-top: 0.25rem !important;
		margin-bottom: 0.25rem !important;
	}
	.my-md-2 {
		margin-top: 0.5rem !important;
		margin-bottom: 0.5rem !important;
	}
	.my-md-3 {
		margin-top: 1rem !important;
		margin-bottom: 1rem !important;
	}
	.my-md-4 {
		margin-top: 1.5rem !important;
		margin-bottom: 1.5rem !important;
	}
	.my-md-5 {
		margin-top: 3rem !important;
		margin-bottom: 3rem !important;
	}
	.my-md-auto {
		margin-top: auto !important;
		margin-bottom: auto !important;
	}
	.mt-md-0 {
		margin-top: 0 !important;
	}
	.mt-md-1 {
		margin-top: 0.25rem !important;
	}
	.mt-md-2 {
		margin-top: 0.5rem !important;
	}
	.mt-md-3 {
		margin-top: 1rem !important;
	}
	.mt-md-4 {
		margin-top: 1.5rem !important;
	}
	.mt-md-5 {
		margin-top: 3rem !important;
	}
	.mt-md-auto {
		margin-top: auto !important;
	}
	.me-md-0 {
		margin-right: 0 !important;
	}
	.me-md-1 {
		margin-right: 0.25rem !important;
	}
	.me-md-2 {
		margin-right: 0.5rem !important;
	}
	.me-md-3 {
		margin-right: 1rem !important;
	}
	.me-md-4 {
		margin-right: 1.5rem !important;
	}
	.me-md-5 {
		margin-right: 3rem !important;
	}
	.me-md-auto {
		margin-right: auto !important;
	}
	.mb-md-0 {
		margin-bottom: 0 !important;
	}
	.mb-md-1 {
		margin-bottom: 0.25rem !important;
	}
	.mb-md-2 {
		margin-bottom: 0.5rem !important;
	}
	.mb-md-3 {
		margin-bottom: 1rem !important;
	}
	.mb-md-4 {
		margin-bottom: 1.5rem !important;
	}
	.mb-md-5 {
		margin-bottom: 3rem !important;
	}
	.mb-md-auto {
		margin-bottom: auto !important;
	}
	.ms-md-0 {
		margin-left: 0 !important;
	}
	.ms-md-1 {
		margin-left: 0.25rem !important;
	}
	.ms-md-2 {
		margin-left: 0.5rem !important;
	}
	.ms-md-3 {
		margin-left: 1rem !important;
	}
	.ms-md-4 {
		margin-left: 1.5rem !important;
	}
	.ms-md-5 {
		margin-left: 3rem !important;
	}
	.ms-md-auto {
		margin-left: auto !important;
	}
	.p-md-0 {
		padding: 0 !important;
	}
	.p-md-1 {
		padding: 0.25rem !important;
	}
	.p-md-2 {
		padding: 0.5rem !important;
	}
	.p-md-3 {
		padding: 1rem !important;
	}
	.p-md-4 {
		padding: 1.5rem !important;
	}
	.p-md-5 {
		padding: 3rem !important;
	}
	.px-md-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.px-md-1 {
		padding-right: 0.25rem !important;
		padding-left: 0.25rem !important;
	}
	.px-md-2 {
		padding-right: 0.5rem !important;
		padding-left: 0.5rem !important;
	}
	.px-md-3 {
		padding-right: 1rem !important;
		padding-left: 1rem !important;
	}
	.px-md-4 {
		padding-right: 1.5rem !important;
		padding-left: 1.5rem !important;
	}
	.px-md-5 {
		padding-right: 3rem !important;
		padding-left: 3rem !important;
	}
	.py-md-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.py-md-1 {
		padding-top: 0.25rem !important;
		padding-bottom: 0.25rem !important;
	}
	.py-md-2 {
		padding-top: 0.5rem !important;
		padding-bottom: 0.5rem !important;
	}
	.py-md-3 {
		padding-top: 1rem !important;
		padding-bottom: 1rem !important;
	}
	.py-md-4 {
		padding-top: 1.5rem !important;
		padding-bottom: 1.5rem !important;
	}
	.py-md-5 {
		padding-top: 3rem !important;
		padding-bottom: 3rem !important;
	}
	.pt-md-0 {
		padding-top: 0 !important;
	}
	.pt-md-1 {
		padding-top: 0.25rem !important;
	}
	.pt-md-2 {
		padding-top: 0.5rem !important;
	}
	.pt-md-3 {
		padding-top: 1rem !important;
	}
	.pt-md-4 {
		padding-top: 1.5rem !important;
	}
	.pt-md-5 {
		padding-top: 3rem !important;
	}
	.pe-md-0 {
		padding-right: 0 !important;
	}
	.pe-md-1 {
		padding-right: 0.25rem !important;
	}
	.pe-md-2 {
		padding-right: 0.5rem !important;
	}
	.pe-md-3 {
		padding-right: 1rem !important;
	}
	.pe-md-4 {
		padding-right: 1.5rem !important;
	}
	.pe-md-5 {
		padding-right: 3rem !important;
	}
	.pb-md-0 {
		padding-bottom: 0 !important;
	}
	.pb-md-1 {
		padding-bottom: 0.25rem !important;
	}
	.pb-md-2 {
		padding-bottom: 0.5rem !important;
	}
	.pb-md-3 {
		padding-bottom: 1rem !important;
	}
	.pb-md-4 {
		padding-bottom: 1.5rem !important;
	}
	.pb-md-5 {
		padding-bottom: 3rem !important;
	}
	.ps-md-0 {
		padding-left: 0 !important;
	}
	.ps-md-1 {
		padding-left: 0.25rem !important;
	}
	.ps-md-2 {
		padding-left: 0.5rem !important;
	}
	.ps-md-3 {
		padding-left: 1rem !important;
	}
	.ps-md-4 {
		padding-left: 1.5rem !important;
	}
	.ps-md-5 {
		padding-left: 3rem !important;
	}
	.text-md-start {
		text-align: left !important;
	}
	.text-md-end {
		text-align: right !important;
	}
	.text-md-center {
		text-align: center !important;
	}
}
@media (min-width: 992px) {
	.float-lg-start {
		float: left !important;
	}
	.float-lg-end {
		float: right !important;
	}
	.float-lg-none {
		float: none !important;
	}
	.d-lg-inline {
		display: inline !important;
	}
	.d-lg-inline-block {
		display: inline-block !important;
	}
	.d-lg-block {
		display: block !important;
	}
	.d-lg-grid {
		display: grid !important;
	}
	.d-lg-table {
		display: table !important;
	}
	.d-lg-table-row {
		display: table-row !important;
	}
	.d-lg-table-cell {
		display: table-cell !important;
	}
	.d-lg-flex {
		display: flex !important;
	}
	.d-lg-inline-flex {
		display: inline-flex !important;
	}
	.d-lg-none {
		display: none !important;
	}
	.flex-lg-fill {
		flex: 1 1 auto !important;
	}
	.flex-lg-row {
		flex-direction: row !important;
	}
	.flex-lg-column {
		flex-direction: column !important;
	}
	.flex-lg-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-lg-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-lg-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-lg-grow-1 {
		flex-grow: 1 !important;
	}
	.flex-lg-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-lg-shrink-1 {
		flex-shrink: 1 !important;
	}
	.flex-lg-wrap {
		flex-wrap: wrap !important;
	}
	.flex-lg-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-lg-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.gap-lg-0 {
		gap: 0 !important;
	}
	.gap-lg-1 {
		gap: 0.25rem !important;
	}
	.gap-lg-2 {
		gap: 0.5rem !important;
	}
	.gap-lg-3 {
		gap: 1rem !important;
	}
	.gap-lg-4 {
		gap: 1.5rem !important;
	}
	.gap-lg-5 {
		gap: 3rem !important;
	}
	.justify-content-lg-start {
		justify-content: flex-start !important;
	}
	.justify-content-lg-end {
		justify-content: flex-end !important;
	}
	.justify-content-lg-center {
		justify-content: center !important;
	}
	.justify-content-lg-between {
		justify-content: space-between !important;
	}
	.justify-content-lg-around {
		justify-content: space-around !important;
	}
	.justify-content-lg-evenly {
		justify-content: space-evenly !important;
	}
	.align-items-lg-start {
		align-items: flex-start !important;
	}
	.align-items-lg-end {
		align-items: flex-end !important;
	}
	.align-items-lg-center {
		align-items: center !important;
	}
	.align-items-lg-baseline {
		align-items: baseline !important;
	}
	.align-items-lg-stretch {
		align-items: stretch !important;
	}
	.align-content-lg-start {
		align-content: flex-start !important;
	}
	.align-content-lg-end {
		align-content: flex-end !important;
	}
	.align-content-lg-center {
		align-content: center !important;
	}
	.align-content-lg-between {
		align-content: space-between !important;
	}
	.align-content-lg-around {
		align-content: space-around !important;
	}
	.align-content-lg-stretch {
		align-content: stretch !important;
	}
	.align-self-lg-auto {
		align-self: auto !important;
	}
	.align-self-lg-start {
		align-self: flex-start !important;
	}
	.align-self-lg-end {
		align-self: flex-end !important;
	}
	.align-self-lg-center {
		align-self: center !important;
	}
	.align-self-lg-baseline {
		align-self: baseline !important;
	}
	.align-self-lg-stretch {
		align-self: stretch !important;
	}
	.m-lg-0 {
		margin: 0 !important;
	}
	.m-lg-1 {
		margin: 0.25rem !important;
	}
	.m-lg-2 {
		margin: 0.5rem !important;
	}
	.m-lg-3 {
		margin: 1rem !important;
	}
	.m-lg-4 {
		margin: 1.5rem !important;
	}
	.m-lg-5 {
		margin: 3rem !important;
	}
	.m-lg-auto {
		margin: auto !important;
	}
	.mx-lg-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.mx-lg-1 {
		margin-right: 0.25rem !important;
		margin-left: 0.25rem !important;
	}
	.mx-lg-2 {
		margin-right: 0.5rem !important;
		margin-left: 0.5rem !important;
	}
	.mx-lg-3 {
		margin-right: 1rem !important;
		margin-left: 1rem !important;
	}
	.mx-lg-4 {
		margin-right: 1.5rem !important;
		margin-left: 1.5rem !important;
	}
	.mx-lg-5 {
		margin-right: 3rem !important;
		margin-left: 3rem !important;
	}
	.mx-lg-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
	.my-lg-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.my-lg-1 {
		margin-top: 0.25rem !important;
		margin-bottom: 0.25rem !important;
	}
	.my-lg-2 {
		margin-top: 0.5rem !important;
		margin-bottom: 0.5rem !important;
	}
	.my-lg-3 {
		margin-top: 1rem !important;
		margin-bottom: 1rem !important;
	}
	.my-lg-4 {
		margin-top: 1.5rem !important;
		margin-bottom: 1.5rem !important;
	}
	.my-lg-5 {
		margin-top: 3rem !important;
		margin-bottom: 3rem !important;
	}
	.my-lg-auto {
		margin-top: auto !important;
		margin-bottom: auto !important;
	}
	.mt-lg-0 {
		margin-top: 0 !important;
	}
	.mt-lg-1 {
		margin-top: 0.25rem !important;
	}
	.mt-lg-2 {
		margin-top: 0.5rem !important;
	}
	.mt-lg-3 {
		margin-top: 1rem !important;
	}
	.mt-lg-4 {
		margin-top: 1.5rem !important;
	}
	.mt-lg-5 {
		margin-top: 3rem !important;
	}
	.mt-lg-auto {
		margin-top: auto !important;
	}
	.me-lg-0 {
		margin-right: 0 !important;
	}
	.me-lg-1 {
		margin-right: 0.25rem !important;
	}
	.me-lg-2 {
		margin-right: 0.5rem !important;
	}
	.me-lg-3 {
		margin-right: 1rem !important;
	}
	.me-lg-4 {
		margin-right: 1.5rem !important;
	}
	.me-lg-5 {
		margin-right: 3rem !important;
	}
	.me-lg-auto {
		margin-right: auto !important;
	}
	.mb-lg-0 {
		margin-bottom: 0 !important;
	}
	.mb-lg-1 {
		margin-bottom: 0.25rem !important;
	}
	.mb-lg-2 {
		margin-bottom: 0.5rem !important;
	}
	.mb-lg-3 {
		margin-bottom: 1rem !important;
	}
	.mb-lg-4 {
		margin-bottom: 1.5rem !important;
	}
	.mb-lg-5 {
		margin-bottom: 3rem !important;
	}
	.mb-lg-auto {
		margin-bottom: auto !important;
	}
	.ms-lg-0 {
		margin-left: 0 !important;
	}
	.ms-lg-1 {
		margin-left: 0.25rem !important;
	}
	.ms-lg-2 {
		margin-left: 0.5rem !important;
	}
	.ms-lg-3 {
		margin-left: 1rem !important;
	}
	.ms-lg-4 {
		margin-left: 1.5rem !important;
	}
	.ms-lg-5 {
		margin-left: 3rem !important;
	}
	.ms-lg-auto {
		margin-left: auto !important;
	}
	.p-lg-0 {
		padding: 0 !important;
	}
	.p-lg-1 {
		padding: 0.25rem !important;
	}
	.p-lg-2 {
		padding: 0.5rem !important;
	}
	.p-lg-3 {
		padding: 1rem !important;
	}
	.p-lg-4 {
		padding: 1.5rem !important;
	}
	.p-lg-5 {
		padding: 3rem !important;
	}
	.px-lg-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.px-lg-1 {
		padding-right: 0.25rem !important;
		padding-left: 0.25rem !important;
	}
	.px-lg-2 {
		padding-right: 0.5rem !important;
		padding-left: 0.5rem !important;
	}
	.px-lg-3 {
		padding-right: 1rem !important;
		padding-left: 1rem !important;
	}
	.px-lg-4 {
		padding-right: 1.5rem !important;
		padding-left: 1.5rem !important;
	}
	.px-lg-5 {
		padding-right: 3rem !important;
		padding-left: 3rem !important;
	}
	.py-lg-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.py-lg-1 {
		padding-top: 0.25rem !important;
		padding-bottom: 0.25rem !important;
	}
	.py-lg-2 {
		padding-top: 0.5rem !important;
		padding-bottom: 0.5rem !important;
	}
	.py-lg-3 {
		padding-top: 1rem !important;
		padding-bottom: 1rem !important;
	}
	.py-lg-4 {
		padding-top: 1.5rem !important;
		padding-bottom: 1.5rem !important;
	}
	.py-lg-5 {
		padding-top: 3rem !important;
		padding-bottom: 3rem !important;
	}
	.pt-lg-0 {
		padding-top: 0 !important;
	}
	.pt-lg-1 {
		padding-top: 0.25rem !important;
	}
	.pt-lg-2 {
		padding-top: 0.5rem !important;
	}
	.pt-lg-3 {
		padding-top: 1rem !important;
	}
	.pt-lg-4 {
		padding-top: 1.5rem !important;
	}
	.pt-lg-5 {
		padding-top: 3rem !important;
	}
	.pe-lg-0 {
		padding-right: 0 !important;
	}
	.pe-lg-1 {
		padding-right: 0.25rem !important;
	}
	.pe-lg-2 {
		padding-right: 0.5rem !important;
	}
	.pe-lg-3 {
		padding-right: 1rem !important;
	}
	.pe-lg-4 {
		padding-right: 1.5rem !important;
	}
	.pe-lg-5 {
		padding-right: 3rem !important;
	}
	.pb-lg-0 {
		padding-bottom: 0 !important;
	}
	.pb-lg-1 {
		padding-bottom: 0.25rem !important;
	}
	.pb-lg-2 {
		padding-bottom: 0.5rem !important;
	}
	.pb-lg-3 {
		padding-bottom: 1rem !important;
	}
	.pb-lg-4 {
		padding-bottom: 1.5rem !important;
	}
	.pb-lg-5 {
		padding-bottom: 3rem !important;
	}
	.ps-lg-0 {
		padding-left: 0 !important;
	}
	.ps-lg-1 {
		padding-left: 0.25rem !important;
	}
	.ps-lg-2 {
		padding-left: 0.5rem !important;
	}
	.ps-lg-3 {
		padding-left: 1rem !important;
	}
	.ps-lg-4 {
		padding-left: 1.5rem !important;
	}
	.ps-lg-5 {
		padding-left: 3rem !important;
	}
	.text-lg-start {
		text-align: left !important;
	}
	.text-lg-end {
		text-align: right !important;
	}
	.text-lg-center {
		text-align: center !important;
	}
}
@media (min-width: 1200px) {
	.float-xl-start {
		float: left !important;
	}
	.float-xl-end {
		float: right !important;
	}
	.float-xl-none {
		float: none !important;
	}
	.d-xl-inline {
		display: inline !important;
	}
	.d-xl-inline-block {
		display: inline-block !important;
	}
	.d-xl-block {
		display: block !important;
	}
	.d-xl-grid {
		display: grid !important;
	}
	.d-xl-table {
		display: table !important;
	}
	.d-xl-table-row {
		display: table-row !important;
	}
	.d-xl-table-cell {
		display: table-cell !important;
	}
	.d-xl-flex {
		display: flex !important;
	}
	.d-xl-inline-flex {
		display: inline-flex !important;
	}
	.d-xl-none {
		display: none !important;
	}
	.flex-xl-fill {
		flex: 1 1 auto !important;
	}
	.flex-xl-row {
		flex-direction: row !important;
	}
	.flex-xl-column {
		flex-direction: column !important;
	}
	.flex-xl-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-xl-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-xl-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-xl-grow-1 {
		flex-grow: 1 !important;
	}
	.flex-xl-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-xl-shrink-1 {
		flex-shrink: 1 !important;
	}
	.flex-xl-wrap {
		flex-wrap: wrap !important;
	}
	.flex-xl-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-xl-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.gap-xl-0 {
		gap: 0 !important;
	}
	.gap-xl-1 {
		gap: 0.25rem !important;
	}
	.gap-xl-2 {
		gap: 0.5rem !important;
	}
	.gap-xl-3 {
		gap: 1rem !important;
	}
	.gap-xl-4 {
		gap: 1.5rem !important;
	}
	.gap-xl-5 {
		gap: 3rem !important;
	}
	.justify-content-xl-start {
		justify-content: flex-start !important;
	}
	.justify-content-xl-end {
		justify-content: flex-end !important;
	}
	.justify-content-xl-center {
		justify-content: center !important;
	}
	.justify-content-xl-between {
		justify-content: space-between !important;
	}
	.justify-content-xl-around {
		justify-content: space-around !important;
	}
	.justify-content-xl-evenly {
		justify-content: space-evenly !important;
	}
	.align-items-xl-start {
		align-items: flex-start !important;
	}
	.align-items-xl-end {
		align-items: flex-end !important;
	}
	.align-items-xl-center {
		align-items: center !important;
	}
	.align-items-xl-baseline {
		align-items: baseline !important;
	}
	.align-items-xl-stretch {
		align-items: stretch !important;
	}
	.align-content-xl-start {
		align-content: flex-start !important;
	}
	.align-content-xl-end {
		align-content: flex-end !important;
	}
	.align-content-xl-center {
		align-content: center !important;
	}
	.align-content-xl-between {
		align-content: space-between !important;
	}
	.align-content-xl-around {
		align-content: space-around !important;
	}
	.align-content-xl-stretch {
		align-content: stretch !important;
	}
	.align-self-xl-auto {
		align-self: auto !important;
	}
	.align-self-xl-start {
		align-self: flex-start !important;
	}
	.align-self-xl-end {
		align-self: flex-end !important;
	}
	.align-self-xl-center {
		align-self: center !important;
	}
	.align-self-xl-baseline {
		align-self: baseline !important;
	}
	.align-self-xl-stretch {
		align-self: stretch !important;
	}
	.m-xl-0 {
		margin: 0 !important;
	}
	.m-xl-1 {
		margin: 0.25rem !important;
	}
	.m-xl-2 {
		margin: 0.5rem !important;
	}
	.m-xl-3 {
		margin: 1rem !important;
	}
	.m-xl-4 {
		margin: 1.5rem !important;
	}
	.m-xl-5 {
		margin: 3rem !important;
	}
	.m-xl-auto {
		margin: auto !important;
	}
	.mx-xl-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.mx-xl-1 {
		margin-right: 0.25rem !important;
		margin-left: 0.25rem !important;
	}
	.mx-xl-2 {
		margin-right: 0.5rem !important;
		margin-left: 0.5rem !important;
	}
	.mx-xl-3 {
		margin-right: 1rem !important;
		margin-left: 1rem !important;
	}
	.mx-xl-4 {
		margin-right: 1.5rem !important;
		margin-left: 1.5rem !important;
	}
	.mx-xl-5 {
		margin-right: 3rem !important;
		margin-left: 3rem !important;
	}
	.mx-xl-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
	.my-xl-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.my-xl-1 {
		margin-top: 0.25rem !important;
		margin-bottom: 0.25rem !important;
	}
	.my-xl-2 {
		margin-top: 0.5rem !important;
		margin-bottom: 0.5rem !important;
	}
	.my-xl-3 {
		margin-top: 1rem !important;
		margin-bottom: 1rem !important;
	}
	.my-xl-4 {
		margin-top: 1.5rem !important;
		margin-bottom: 1.5rem !important;
	}
	.my-xl-5 {
		margin-top: 3rem !important;
		margin-bottom: 3rem !important;
	}
	.my-xl-auto {
		margin-top: auto !important;
		margin-bottom: auto !important;
	}
	.mt-xl-0 {
		margin-top: 0 !important;
	}
	.mt-xl-1 {
		margin-top: 0.25rem !important;
	}
	.mt-xl-2 {
		margin-top: 0.5rem !important;
	}
	.mt-xl-3 {
		margin-top: 1rem !important;
	}
	.mt-xl-4 {
		margin-top: 1.5rem !important;
	}
	.mt-xl-5 {
		margin-top: 3rem !important;
	}
	.mt-xl-auto {
		margin-top: auto !important;
	}
	.me-xl-0 {
		margin-right: 0 !important;
	}
	.me-xl-1 {
		margin-right: 0.25rem !important;
	}
	.me-xl-2 {
		margin-right: 0.5rem !important;
	}
	.me-xl-3 {
		margin-right: 1rem !important;
	}
	.me-xl-4 {
		margin-right: 1.5rem !important;
	}
	.me-xl-5 {
		margin-right: 3rem !important;
	}
	.me-xl-auto {
		margin-right: auto !important;
	}
	.mb-xl-0 {
		margin-bottom: 0 !important;
	}
	.mb-xl-1 {
		margin-bottom: 0.25rem !important;
	}
	.mb-xl-2 {
		margin-bottom: 0.5rem !important;
	}
	.mb-xl-3 {
		margin-bottom: 1rem !important;
	}
	.mb-xl-4 {
		margin-bottom: 1.5rem !important;
	}
	.mb-xl-5 {
		margin-bottom: 3rem !important;
	}
	.mb-xl-auto {
		margin-bottom: auto !important;
	}
	.ms-xl-0 {
		margin-left: 0 !important;
	}
	.ms-xl-1 {
		margin-left: 0.25rem !important;
	}
	.ms-xl-2 {
		margin-left: 0.5rem !important;
	}
	.ms-xl-3 {
		margin-left: 1rem !important;
	}
	.ms-xl-4 {
		margin-left: 1.5rem !important;
	}
	.ms-xl-5 {
		margin-left: 3rem !important;
	}
	.ms-xl-auto {
		margin-left: auto !important;
	}
	.p-xl-0 {
		padding: 0 !important;
	}
	.p-xl-1 {
		padding: 0.25rem !important;
	}
	.p-xl-2 {
		padding: 0.5rem !important;
	}
	.p-xl-3 {
		padding: 1rem !important;
	}
	.p-xl-4 {
		padding: 1.5rem !important;
	}
	.p-xl-5 {
		padding: 3rem !important;
	}
	.px-xl-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.px-xl-1 {
		padding-right: 0.25rem !important;
		padding-left: 0.25rem !important;
	}
	.px-xl-2 {
		padding-right: 0.5rem !important;
		padding-left: 0.5rem !important;
	}
	.px-xl-3 {
		padding-right: 1rem !important;
		padding-left: 1rem !important;
	}
	.px-xl-4 {
		padding-right: 1.5rem !important;
		padding-left: 1.5rem !important;
	}
	.px-xl-5 {
		padding-right: 3rem !important;
		padding-left: 3rem !important;
	}
	.py-xl-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.py-xl-1 {
		padding-top: 0.25rem !important;
		padding-bottom: 0.25rem !important;
	}
	.py-xl-2 {
		padding-top: 0.5rem !important;
		padding-bottom: 0.5rem !important;
	}
	.py-xl-3 {
		padding-top: 1rem !important;
		padding-bottom: 1rem !important;
	}
	.py-xl-4 {
		padding-top: 1.5rem !important;
		padding-bottom: 1.5rem !important;
	}
	.py-xl-5 {
		padding-top: 3rem !important;
		padding-bottom: 3rem !important;
	}
	.pt-xl-0 {
		padding-top: 0 !important;
	}
	.pt-xl-1 {
		padding-top: 0.25rem !important;
	}
	.pt-xl-2 {
		padding-top: 0.5rem !important;
	}
	.pt-xl-3 {
		padding-top: 1rem !important;
	}
	.pt-xl-4 {
		padding-top: 1.5rem !important;
	}
	.pt-xl-5 {
		padding-top: 3rem !important;
	}
	.pe-xl-0 {
		padding-right: 0 !important;
	}
	.pe-xl-1 {
		padding-right: 0.25rem !important;
	}
	.pe-xl-2 {
		padding-right: 0.5rem !important;
	}
	.pe-xl-3 {
		padding-right: 1rem !important;
	}
	.pe-xl-4 {
		padding-right: 1.5rem !important;
	}
	.pe-xl-5 {
		padding-right: 3rem !important;
	}
	.pb-xl-0 {
		padding-bottom: 0 !important;
	}
	.pb-xl-1 {
		padding-bottom: 0.25rem !important;
	}
	.pb-xl-2 {
		padding-bottom: 0.5rem !important;
	}
	.pb-xl-3 {
		padding-bottom: 1rem !important;
	}
	.pb-xl-4 {
		padding-bottom: 1.5rem !important;
	}
	.pb-xl-5 {
		padding-bottom: 3rem !important;
	}
	.ps-xl-0 {
		padding-left: 0 !important;
	}
	.ps-xl-1 {
		padding-left: 0.25rem !important;
	}
	.ps-xl-2 {
		padding-left: 0.5rem !important;
	}
	.ps-xl-3 {
		padding-left: 1rem !important;
	}
	.ps-xl-4 {
		padding-left: 1.5rem !important;
	}
	.ps-xl-5 {
		padding-left: 3rem !important;
	}
	.text-xl-start {
		text-align: left !important;
	}
	.text-xl-end {
		text-align: right !important;
	}
	.text-xl-center {
		text-align: center !important;
	}
}
@media (min-width: 1400px) {
	.float-xxl-start {
		float: left !important;
	}
	.float-xxl-end {
		float: right !important;
	}
	.float-xxl-none {
		float: none !important;
	}
	.d-xxl-inline {
		display: inline !important;
	}
	.d-xxl-inline-block {
		display: inline-block !important;
	}
	.d-xxl-block {
		display: block !important;
	}
	.d-xxl-grid {
		display: grid !important;
	}
	.d-xxl-table {
		display: table !important;
	}
	.d-xxl-table-row {
		display: table-row !important;
	}
	.d-xxl-table-cell {
		display: table-cell !important;
	}
	.d-xxl-flex {
		display: flex !important;
	}
	.d-xxl-inline-flex {
		display: inline-flex !important;
	}
	.d-xxl-none {
		display: none !important;
	}
	.flex-xxl-fill {
		flex: 1 1 auto !important;
	}
	.flex-xxl-row {
		flex-direction: row !important;
	}
	.flex-xxl-column {
		flex-direction: column !important;
	}
	.flex-xxl-row-reverse {
		flex-direction: row-reverse !important;
	}
	.flex-xxl-column-reverse {
		flex-direction: column-reverse !important;
	}
	.flex-xxl-grow-0 {
		flex-grow: 0 !important;
	}
	.flex-xxl-grow-1 {
		flex-grow: 1 !important;
	}
	.flex-xxl-shrink-0 {
		flex-shrink: 0 !important;
	}
	.flex-xxl-shrink-1 {
		flex-shrink: 1 !important;
	}
	.flex-xxl-wrap {
		flex-wrap: wrap !important;
	}
	.flex-xxl-nowrap {
		flex-wrap: nowrap !important;
	}
	.flex-xxl-wrap-reverse {
		flex-wrap: wrap-reverse !important;
	}
	.gap-xxl-0 {
		gap: 0 !important;
	}
	.gap-xxl-1 {
		gap: 0.25rem !important;
	}
	.gap-xxl-2 {
		gap: 0.5rem !important;
	}
	.gap-xxl-3 {
		gap: 1rem !important;
	}
	.gap-xxl-4 {
		gap: 1.5rem !important;
	}
	.gap-xxl-5 {
		gap: 3rem !important;
	}
	.justify-content-xxl-start {
		justify-content: flex-start !important;
	}
	.justify-content-xxl-end {
		justify-content: flex-end !important;
	}
	.justify-content-xxl-center {
		justify-content: center !important;
	}
	.justify-content-xxl-between {
		justify-content: space-between !important;
	}
	.justify-content-xxl-around {
		justify-content: space-around !important;
	}
	.justify-content-xxl-evenly {
		justify-content: space-evenly !important;
	}
	.align-items-xxl-start {
		align-items: flex-start !important;
	}
	.align-items-xxl-end {
		align-items: flex-end !important;
	}
	.align-items-xxl-center {
		align-items: center !important;
	}
	.align-items-xxl-baseline {
		align-items: baseline !important;
	}
	.align-items-xxl-stretch {
		align-items: stretch !important;
	}
	.align-content-xxl-start {
		align-content: flex-start !important;
	}
	.align-content-xxl-end {
		align-content: flex-end !important;
	}
	.align-content-xxl-center {
		align-content: center !important;
	}
	.align-content-xxl-between {
		align-content: space-between !important;
	}
	.align-content-xxl-around {
		align-content: space-around !important;
	}
	.align-content-xxl-stretch {
		align-content: stretch !important;
	}
	.align-self-xxl-auto {
		align-self: auto !important;
	}
	.align-self-xxl-start {
		align-self: flex-start !important;
	}
	.align-self-xxl-end {
		align-self: flex-end !important;
	}
	.align-self-xxl-center {
		align-self: center !important;
	}
	.align-self-xxl-baseline {
		align-self: baseline !important;
	}
	.align-self-xxl-stretch {
		align-self: stretch !important;
	}
	.m-xxl-0 {
		margin: 0 !important;
	}
	.m-xxl-1 {
		margin: 0.25rem !important;
	}
	.m-xxl-2 {
		margin: 0.5rem !important;
	}
	.m-xxl-3 {
		margin: 1rem !important;
	}
	.m-xxl-4 {
		margin: 1.5rem !important;
	}
	.m-xxl-5 {
		margin: 3rem !important;
	}
	.m-xxl-auto {
		margin: auto !important;
	}
	.mx-xxl-0 {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.mx-xxl-1 {
		margin-right: 0.25rem !important;
		margin-left: 0.25rem !important;
	}
	.mx-xxl-2 {
		margin-right: 0.5rem !important;
		margin-left: 0.5rem !important;
	}
	.mx-xxl-3 {
		margin-right: 1rem !important;
		margin-left: 1rem !important;
	}
	.mx-xxl-4 {
		margin-right: 1.5rem !important;
		margin-left: 1.5rem !important;
	}
	.mx-xxl-5 {
		margin-right: 3rem !important;
		margin-left: 3rem !important;
	}
	.mx-xxl-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
	.my-xxl-0 {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	.my-xxl-1 {
		margin-top: 0.25rem !important;
		margin-bottom: 0.25rem !important;
	}
	.my-xxl-2 {
		margin-top: 0.5rem !important;
		margin-bottom: 0.5rem !important;
	}
	.my-xxl-3 {
		margin-top: 1rem !important;
		margin-bottom: 1rem !important;
	}
	.my-xxl-4 {
		margin-top: 1.5rem !important;
		margin-bottom: 1.5rem !important;
	}
	.my-xxl-5 {
		margin-top: 3rem !important;
		margin-bottom: 3rem !important;
	}
	.my-xxl-auto {
		margin-top: auto !important;
		margin-bottom: auto !important;
	}
	.mt-xxl-0 {
		margin-top: 0 !important;
	}
	.mt-xxl-1 {
		margin-top: 0.25rem !important;
	}
	.mt-xxl-2 {
		margin-top: 0.5rem !important;
	}
	.mt-xxl-3 {
		margin-top: 1rem !important;
	}
	.mt-xxl-4 {
		margin-top: 1.5rem !important;
	}
	.mt-xxl-5 {
		margin-top: 3rem !important;
	}
	.mt-xxl-auto {
		margin-top: auto !important;
	}
	.me-xxl-0 {
		margin-right: 0 !important;
	}
	.me-xxl-1 {
		margin-right: 0.25rem !important;
	}
	.me-xxl-2 {
		margin-right: 0.5rem !important;
	}
	.me-xxl-3 {
		margin-right: 1rem !important;
	}
	.me-xxl-4 {
		margin-right: 1.5rem !important;
	}
	.me-xxl-5 {
		margin-right: 3rem !important;
	}
	.me-xxl-auto {
		margin-right: auto !important;
	}
	.mb-xxl-0 {
		margin-bottom: 0 !important;
	}
	.mb-xxl-1 {
		margin-bottom: 0.25rem !important;
	}
	.mb-xxl-2 {
		margin-bottom: 0.5rem !important;
	}
	.mb-xxl-3 {
		margin-bottom: 1rem !important;
	}
	.mb-xxl-4 {
		margin-bottom: 1.5rem !important;
	}
	.mb-xxl-5 {
		margin-bottom: 3rem !important;
	}
	.mb-xxl-auto {
		margin-bottom: auto !important;
	}
	.ms-xxl-0 {
		margin-left: 0 !important;
	}
	.ms-xxl-1 {
		margin-left: 0.25rem !important;
	}
	.ms-xxl-2 {
		margin-left: 0.5rem !important;
	}
	.ms-xxl-3 {
		margin-left: 1rem !important;
	}
	.ms-xxl-4 {
		margin-left: 1.5rem !important;
	}
	.ms-xxl-5 {
		margin-left: 3rem !important;
	}
	.ms-xxl-auto {
		margin-left: auto !important;
	}
	.p-xxl-0 {
		padding: 0 !important;
	}
	.p-xxl-1 {
		padding: 0.25rem !important;
	}
	.p-xxl-2 {
		padding: 0.5rem !important;
	}
	.p-xxl-3 {
		padding: 1rem !important;
	}
	.p-xxl-4 {
		padding: 1.5rem !important;
	}
	.p-xxl-5 {
		padding: 3rem !important;
	}
	.px-xxl-0 {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	.px-xxl-1 {
		padding-right: 0.25rem !important;
		padding-left: 0.25rem !important;
	}
	.px-xxl-2 {
		padding-right: 0.5rem !important;
		padding-left: 0.5rem !important;
	}
	.px-xxl-3 {
		padding-right: 1rem !important;
		padding-left: 1rem !important;
	}
	.px-xxl-4 {
		padding-right: 1.5rem !important;
		padding-left: 1.5rem !important;
	}
	.px-xxl-5 {
		padding-right: 3rem !important;
		padding-left: 3rem !important;
	}
	.py-xxl-0 {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.py-xxl-1 {
		padding-top: 0.25rem !important;
		padding-bottom: 0.25rem !important;
	}
	.py-xxl-2 {
		padding-top: 0.5rem !important;
		padding-bottom: 0.5rem !important;
	}
	.py-xxl-3 {
		padding-top: 1rem !important;
		padding-bottom: 1rem !important;
	}
	.py-xxl-4 {
		padding-top: 1.5rem !important;
		padding-bottom: 1.5rem !important;
	}
	.py-xxl-5 {
		padding-top: 3rem !important;
		padding-bottom: 3rem !important;
	}
	.pt-xxl-0 {
		padding-top: 0 !important;
	}
	.pt-xxl-1 {
		padding-top: 0.25rem !important;
	}
	.pt-xxl-2 {
		padding-top: 0.5rem !important;
	}
	.pt-xxl-3 {
		padding-top: 1rem !important;
	}
	.pt-xxl-4 {
		padding-top: 1.5rem !important;
	}
	.pt-xxl-5 {
		padding-top: 3rem !important;
	}
	.pe-xxl-0 {
		padding-right: 0 !important;
	}
	.pe-xxl-1 {
		padding-right: 0.25rem !important;
	}
	.pe-xxl-2 {
		padding-right: 0.5rem !important;
	}
	.pe-xxl-3 {
		padding-right: 1rem !important;
	}
	.pe-xxl-4 {
		padding-right: 1.5rem !important;
	}
	.pe-xxl-5 {
		padding-right: 3rem !important;
	}
	.pb-xxl-0 {
		padding-bottom: 0 !important;
	}
	.pb-xxl-1 {
		padding-bottom: 0.25rem !important;
	}
	.pb-xxl-2 {
		padding-bottom: 0.5rem !important;
	}
	.pb-xxl-3 {
		padding-bottom: 1rem !important;
	}
	.pb-xxl-4 {
		padding-bottom: 1.5rem !important;
	}
	.pb-xxl-5 {
		padding-bottom: 3rem !important;
	}
	.ps-xxl-0 {
		padding-left: 0 !important;
	}
	.ps-xxl-1 {
		padding-left: 0.25rem !important;
	}
	.ps-xxl-2 {
		padding-left: 0.5rem !important;
	}
	.ps-xxl-3 {
		padding-left: 1rem !important;
	}
	.ps-xxl-4 {
		padding-left: 1.5rem !important;
	}
	.ps-xxl-5 {
		padding-left: 3rem !important;
	}
	.text-xxl-start {
		text-align: left !important;
	}
	.text-xxl-end {
		text-align: right !important;
	}
	.text-xxl-center {
		text-align: center !important;
	}
}
` as GlobalStyleComponent<Props, DefaultTheme>;

export default Bootstrap;
