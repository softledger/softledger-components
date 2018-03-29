
## BoolDropDownMenuItem

From [`src/BoolDropDownMenuItem.jsx`](src/BoolDropDownMenuItem.jsx)

Drop Down Menu Item which is toggled as either on/off on click
Component is stateless, so toggle is handled up

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**onToggle** | `Function` |  | :white_check_mark: | Function to toggles the value
**text** | `String` |  | :white_check_mark: | Menu Item Text
**value** | `Boolean` |  | :x: | Current value




## ButtonBar

From [`src/ButtonBar.jsx`](src/ButtonBar.jsx)

Displays a Row a buttons, propertly spaced

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**buttons** | `Array` |  | :white_check_mark: | Array of buttons to show, in order
**style** | `Object` |  | :x: | Additional styles on the containing component




## CardValue

From [`src/CardValue.jsx`](src/CardValue.jsx)

Displays a Card with a header and body

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**Body** | `Union<String \| Object>` |  | :x: | Text or JSX to display in the body
**Header** | `Union<String \| Object>` |  | :x: | Text or JSX to display in the heaader
**big** | `Boolean` | `false` | :x: | Set true will pad header and body with extra space
**style** | `Object` |  | :x: | Extra styles to apply to container




## ChipButton

From [`src/ChipButton.jsx`](src/ChipButton.jsx)

Displays a Pill shaped Button with text and an Icon

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**iconClass** | `String` |  | :x: | FontAwesome Icon class name (make sure font awesome library is loaded)
**onClick** | `Function` |  | :x: | Function to call when clicked
**style** | `Object` |  | :x: | Additional styles to add to container
**text** | `Union<String \| Object>` |  | :white_check_mark: | Can be text or jsx




## ConfirmButton

From [`src/ConfirmButton.jsx`](src/ConfirmButton.jsx)

Button which, when clicked, displays a confirm modal

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**buttonClass** | `String` | `'btn-primary'` | :x: | Classes to apply to button "space separated" example: 'btn-success'
**buttonText** | `String` | `'Submit'` | :x: | Text to display on the button
**confirmBody** | `Union<String \| Object>` | `'Please Confirm'` | :x: | Text or JSX to show in modal body
**confirmTitle** | `Union<String \| Object>` | `'Are you sure?'` | :x: | Text or JSX to show in modal header
**disabled** | `Boolean` | `false` | :x: | Whether the button is disabled
**onConfirm** | `Function` |  | :white_check_mark: | Callback when modal is confirmed
**style** | `Object` |  | :x: | Additional styles to apply to the button




## DateFormat

From [`src/DateFormat.jsx`](src/DateFormat.jsx)

Formats a date value consistently

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**date** | `Union<Object \| String>` |  | :white_check_mark: | Can be a string, Date() or moment()
**format** | `String` | `'MM/DD/YYYY'` | :x: | Moment format specifier




## DropDownMenu

From [`src/DropDownMenu.jsx`](src/DropDownMenu.jsx)

Thin wrapper on reactstrap DropdownMenu
Toggle tag defaults to a font aweseom bars
Controls toggle state

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` |  | :x: | className to apply to DropDown container
**openRight** | `Boolean` | `false` | :x: | Should open on the right
**toggleTag** | `Object` | `<FontAwesomeIcon icon='bars' />` | :x: | Custom Tag




## LoadingButton

From [`src/LoadingButton.jsx`](src/LoadingButton.jsx)

Multi-purpose button 
shows loading icon if onSubmit is promise based
controls loading state

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**buttonClass** | `String` | `'btn-primary'` | :x: | Optional classNames to apply to the button
**buttonText** | `String` |  | :x: | Text to display on the button **required** if iconClass is not set
**disabled** | `Boolean` | `false` | :x: | Set to true to disable the button
**iconClass** | `String` |  | :x: | Font Awesome icon name to be used *if set buttonText is ignored
**notPromise** | `Boolean` | `false` | :x: | Specifies that the onClick function does not return a Promise
**onClick** | `Function` |  | :white_check_mark: | Callback for when the button is clicked *if it does not return a promise, set prop 'notPromise'={true}
**toolTip** | `String` |  | :x: | Text to display as a tooltip when the button is hovered
**toolTipPlacement** | `Enum('left','right','top','bottom','topLeft','topRight','bottomLeft','bottomRight')` | `'top'` | :x: | Location the tooltip should appear




## SLLoadingIcon

From [`src/SLLoadingIcon.jsx`](src/SLLoadingIcon.jsx)

Loading Icon which displays the SoftLedger Log spinning

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------




## SLLogo

From [`src/SLLogo.jsx`](src/SLLogo.jsx)

SVG generated SoftLedger Logo

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------




## TabView

From [`src/TabView.jsx`](src/TabView.jsx)

Thin wrapper on reactstrap's Tabs

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**tabs** | `Array[]<Shape>` |  | :white_check_mark: | Array of tabs to display
**tabs[].Body** | `Object` |  | :white_check_mark: | JSX to display as the tab content
**tabs[].Header** | `String` |  | :white_check_mark: | Tab Navigation Header Text
**tabs[].onClick** | `Function` |  | :x: | Optional callback when the tab is clicked useful for loading content




## ZeroPad

From [`src/ZeroPad.jsx`](src/ZeroPad.jsx)

Pads texts with zeroes ('0')
* Can be text or integer
* If value.length > pad, no zeroes are added
* if value is null then '--' is displayed

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**pad** | `Number` |  | :white_check_mark: | 
**value** | `Union<String \| Number>` |  | :x: | 



