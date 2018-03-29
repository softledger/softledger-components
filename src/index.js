//hopefully this works?
import 'bootstrap/scss/bootstrap.scss';
import fontawesome from '@fortawesome/fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
fontawesome.library.add(faTimes, faPlus, faBars);

import BoolDropDownMenuItem from './BoolDropDownMenuItem';
import ButtonBar from './ButtonBar';
import CardValue from './CardValue';
import ChipButton from './ChipButton';
import ConfirmButton from './ConfirmButton';
import DateFormat from './DateFormat';
import DropDownMenu from './DropDownMenu';
import LoadingButton from './LoadingButton';
import SLLoadingIcon from './SLLoadingIcon';
import SLLogo from './SLLogo';
import TabView from './TabView';
import ZeroPad from './ZeroPad';

export {
	BoolDropDownMenuItem,
	ButtonBar,
	CardValue,
	ChipButton,
	ConfirmButton,
	DateFormat,
	DropDownMenu,
	LoadingButton,
	SLLoadingIcon,
	SLLogo,
	TabView,
	ZeroPad
}