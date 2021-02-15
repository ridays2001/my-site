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
b,
strong {
	font-weight: bolder;
}
.small,
small {
	font-size: 0.875em;
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
textarea {
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}
button {
	text-transform: none;
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
::-webkit-inner-spin-button {
	height: auto;
}
::-webkit-search-decoration {
	-webkit-appearance: none;
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
.list-unstyled {
	padding-left: 0;
	list-style: none;
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
.row-cols-1 > * {
	flex: 0 0 auto;
	width: 100%;
}
.row-cols-2 > * {
	flex: 0 0 auto;
	width: 50%;
}
.row-cols-4 > * {
	flex: 0 0 auto;
	width: 25%;
}
.row-cols-6 > * {
	flex: 0 0 auto;
	width: 16.6666666667%;
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
${devices.md} {
	.col-md {
		flex: 1 0 0%;
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
}
${devices.lg} {
	.col-lg {
		flex: 1 0 0%;
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
}
${devices.xl} {
	.col-xl {
		flex: 1 0 0%;
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
}
${devices.xxl} {
	.col-xxl {
		flex: 1 0 0%;
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

.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
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
	.card-group > .card:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
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
.alert-success {
	color: #0f5132;
	background-color: #d1e7dd;
	border-color: #badbcc;
}
.alert-danger {
	color: #842029;
	background-color: #f8d7da;
	border-color: #f5c2c7;
}
.list-group {
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	border-radius: 0.25rem;
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
.list-group-item + .list-group-item {
	border-top-width: 0;
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
`;

export default Bootstrap;
