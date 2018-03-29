import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withState } from '@dump247/storybook-state';

import 'bootstrap/scss/bootstrap.scss';


//add fontawesome icons for testing
import fontawesome from '@fortawesome/fontawesome';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';
fontawesome.library.add(faTimes, faPlus, faBars);

//Story components
import { 
	BoolDropDownMenuItem, ButtonBar, CardValue, ChipButton, ConfirmButton, DateFormat, DropDownMenu, LoadingButton, SLLoadingIcon, SLLogo, TabView, ZeroPad
} from '../dist';

//import styles
import '../dist/styles/css';

//promise function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

storiesOf('ButtonBar', module)
	.add('With Buttons', () => (
		<ButtonBar
			buttons={[
				<button 
					class="btn btn-primary"
				>Button 1</button>,
				<button 
					class="btn btn-warning"
				>Button 2</button>,
				<button 
					class="btn btn-danger"
				>Button 3</button>
			]}
		/>
	))

storiesOf('CardValue', module)
	.addDecorator(story => (
		<div class="col-sm-6">
			{story()}
		</div>
	))
	.add('With Header', () => 
		<CardValue
			Header="Test Header"
			Body="Body"
			big={false} 
		/>
	)
	.add('Without Header', () => 
		<CardValue
			Body={
				<ul>
					<li>This is</li>
					<li>A Body</li>
					<li>with jsx</li>
				</ul>
			}
		/>
	)
	.add("With Big", () => 
		<CardValue
			Header={<h4>Header with big</h4>}
			big={true}
			Body={
				<p>So much space in here!</p>
			}
		/>
	)

storiesOf('ChipButton', module)
	.add('With Icon', () => (
		<ChipButton 
			onClick={ action('button-click') }
			iconClass='rocket'
			text="Blast Off"
		/>
	));

storiesOf('ConfirmButton', module)
	.add('Minimum', () => (
		<ConfirmButton
			onConfirm={ () => sleep(1000) }
		/>
	))
	.add('All Fields', () => (
		<ConfirmButton
			onConfirm={ () => sleep(1000) }
			confirmBody={
				<div>
					<h4>Body can be text</h4>
					<p>Or JSX</p>
				</div>
			}
			confirmTitle={
				<h1>Title can be text or JSX</h1>
			}
			buttonClass="btn-success"
			buttonText="My Confirm Button"
		/>			
	))
	.add('Disabled', () => (
		<ConfirmButton
			onConfirm={ () => sleep(1000) }
			disabled={true}
		/>
	))

storiesOf('DateFormat', module)
	.add('Default Format', () => (
		<DateFormat date={new Date()} />
	))
	.add('Missing Date', () => (
		<DateFormat />
	))
	.add('Custom format', () => (
		<DateFormat date={new Date} format={'MM/DD/YY'} />
	))

storiesOf('DropDownMenu', module)
	.add('With List', () => 
		<DropDownMenu>
			<ul>
				<li>One</li>
				<li>Two</li>
			</ul>
		</DropDownMenu>
	)
	.add('With Boolean Toggle', 
		withState({active: false}, store => 
			<DropDownMenu>
				<BoolDropDownMenuItem
					onToggle={text => store.set({active: !store.state.active})}
					text="Toggle Me!"
					value={store.state.active}
				/>
			</DropDownMenu>		
	))

storiesOf('LoadingButton', module)
	.add('Default', () => 
		<LoadingButton 
			onClick={() => sleep(1000)}
			buttonText="Loading Button" 
		/>
	)
	.add('All options', () => 
		<LoadingButton
			onClick={() => sleep(1000)}
			buttonClass="btn-success"
			buttonText="My Button Text"
			toolTip="My Tooltip"
		/>
	)
	.add('Not Promise', () => 
		<LoadingButton
			onClick={action('button-click')}
			buttonText="Not a Promise"
			notPromise={true}
		/>
	)
	.add('With Icon', () => 
		<LoadingButton
			onClick={() => sleep(1000)}
			iconClass="rocket"
		/>
	)
	.add('Disabled', () =>
		<LoadingButton
			disabled={true}
			buttonText="Disabled"
			onClick={() => sleep(1000)}
		/>
	)

storiesOf('SLLoadingIcon', module)
	.add('Default', () => <SLLoadingIcon />)

storiesOf('SLLogo', module)
	.add('Default', () => <SLLogo />);

storiesOf('TabView', module)
	.add('Default', () => 
		<TabView
			tabs={[{
				Header: "Tab Numero Uno",
				Body: "Nothing on click"
			}, {
				Header: "Tab Numero Dos",
				Body: "Action on click",
				onClick: action('button-click')
			}]}
		/>
	)

storiesOf('ZeroPad', module)
	.add('With Pad', () => 
		<ZeroPad 
			value="4"
			pad={4}
		/>
	)
	.add("With Pad Not Needed", () => 
		<ZeroPad
			value="40000"
			pad={4}
		/>
	)
	.add('Without value', () => 
		<ZeroPad
			pad={4}
		/>
	)