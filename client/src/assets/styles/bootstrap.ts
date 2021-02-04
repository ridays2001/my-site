// cSpell: disable
import { createGlobalStyle } from 'styled-components';
import { devices } from '../theme/constants';

const Bootstrap = createGlobalStyle`
:root {
	--bs-blue: #0d6efd;
	--bs-indigo: #6610f2;
	--bs-purple: #6f42c1;
	--bs-pink: #d63384;
	--bs-red: #dc3545;
	--bs-orange: #fd7e14;
	--bs-yellow: #ffc107;
	--bs-green: #198754;
	--bs-teal: #20c997;
	--bs-cyan: #0dcaf0;
	--bs-white: #ffffff;
	--bs-gray:#6c757d;
	--bs-gray-dark: #343a40;
	--bs-primary: #0d6efd;
	--bs-secondary: #6c757d;
	--bs-success: #198754;
	--bs-info: #0dcaf0;
	--bs-warning: #ffc107;
	--bs-danger: #dc3545;
	--bs-dark: #212529;
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
${devices.xl} {
	.h1,
	h1 {
		font-size: 2.5rem;
	}
}
.h2,
h2 {
	font-size: calc(1.325rem + 0.9vw);
}
${devices.xl} {
	.h2,
	h2 {
		font-size: 2rem;
	}
}
.h3,
h3 {
	font-size: calc(1.3rem + 0.6vw);
}
${devices.xl} {
	.h3,
	h3 {
		font-size: 1.75rem;
	}
}
.h4,
h4 {
	font-size: calc(1.275rem + 0.3vw);
}
${devices.xl} {
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
${devices.xl} {
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
${devices.xl} {
	.display-1 {
		font-size: 5rem;
	}
}
.display-2 {
	font-size: calc(1.575rem + 3.9vw);
	font-weight: 300;
	line-height: 1.2;
}
${devices.xl} {
	.display-2 {
		font-size: 4.5rem;
	}
}
.display-3 {
	font-size: calc(1.525rem + 3.3vw);
	font-weight: 300;
	line-height: 1.2;
}
${devices.xl} {
	.display-3 {
		font-size: 4rem;
	}
}
.display-4 {
	font-size: calc(1.475rem + 2.7vw);
	font-weight: 300;
	line-height: 1.2;
}
${devices.xl} {
	.display-4 {
		font-size: 3.5rem;
	}
}
.display-5 {
	font-size: calc(1.425rem + 2.1vw);
	font-weight: 300;
	line-height: 1.2;
}
${devices.xl} {
	.display-5 {
		font-size: 3rem;
	}
}
.display-6 {
	font-size: calc(1.375rem + 1.5vw);
	font-weight: 300;
	line-height: 1.2;
}
${devices.xl} {
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
.container-fluid {
	width: 100%;
	padding-right: var(--bs-gutter-x, 0.75rem);
	padding-left: var(--bs-gutter-x, 0.75rem);
	margin-right: auto;
	margin-left: auto;
}
${devices.sm} {
	.container {
		max-width: 540px;
	}
}
${devices.md} {
	.container  {
		max-width: 720px;
	}
}
${devices.lg} {
	.container {
		max-width: 960px;
	}
}
${devices.xl} {
	.container {
		max-width: 1140px;
	}
}
${devices.xxl} {
	.container {
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
${devices.sm} {
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
${devices.md} {
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
${devices.lg} {
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
${devices.xl} {
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
${devices.xxl} {
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
textarea.form-control {
	min-height: calc(1.5em + 0.75rem + 2px);
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
.input-group
	> :not(:first-child) {
	margin-left: -1px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.form-control.is-valid {
	padding-right: calc(1.5em + 0.75rem);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right calc(0.375em + 0.1875rem) center;
	background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.form-control.is-invalid {
	padding-right: calc(1.5em + 0.75rem);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right calc(0.375em + 0.1875rem) center;
	background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
button, .btn {
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
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
	transition: all 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
	button, .btn {
		transition: none;
	}
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
.btn-danger:focus {
	color: var(--bs-white);
	background-color: #bb2d3b;
	border-color: #b02a37;
	box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger.disabled,
.btn-danger:disabled {
	color: var(--bs-white);
	background-color: var(--bs-red);
	border-color: var(--bs-red);
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
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
	color: var(--bs-red);
	background-color: transparent;
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

.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
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
.card-group > .card {
	margin-bottom: 0.75rem;
}
${devices.sm} {
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
${devices.sm} {
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
${devices.md} {
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
${devices.lg} {
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
${devices.xl} {
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
${devices.xxl} {
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

.clearfix::after {
	display: block;
	clear: both;
	content: '';
}
.sticky-top {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	z-index: 1020;
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
.d-inline {
	display: inline !important;
}
.d-block {
	display: block !important;
}
.d-flex {
	display: flex !important;
}
.d-none {
	display: none !important;
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
.bg-transparent {
	background-color: transparent !important;
}
${devices.sm} {
	.d-sm-block {
		display: block !important;
	}
	.d-sm-flex {
		display: flex !important;
	}
	.d-sm-none {
		display: none !important;
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
${devices.md} {
	.d-md-inline {
		display: inline !important;
	}
	.d-md-block {
		display: block !important;
	}
	.d-md-flex {
		display: flex !important;
	}
	.d-md-none {
		display: none !important;
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
${devices.lg} {
	.d-lg-block {
		display: block !important;
	}
	.d-lg-flex {
		display: flex !important;
	}
	.d-lg-none {
		display: none !important;
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
${devices.xl} {
	.d-xl-block {
		display: block !important;
	}
	.d-xl-flex {
		display: flex !important;
	}
	.d-xl-none {
		display: none !important;
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
${devices.xxl} {
	.d-xxl-block {
		display: block !important;
	}
	.d-xxl-flex {
		display: flex !important;
	}
	.d-xxl-none {
		display: none !important;
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
`;

export default Bootstrap;
