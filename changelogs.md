# Changelogs Anton

## 10-24-23(MARS-2023-002) Anton

-   Updated the changelogs

## 10-23-23(MARS-2023-002) Anton

-   Edited the changelogs
-   Added `markdownlint` configuration
-   Updated the `babel` critical error

## 10-14-23(MARS-2023-006) Chester - Anton

-   Fixed the width of the `Button` and placed to right side

## 10-14-23(MARS-2023-004) Federick - Anton

-   Fixed the width of the `Button`

## 10-14-23(MARS-2023-003) Camil - Anton

-   Fixed the width of the `Button`

## 10-14-23(MARS-2023-009) Camil - Anton

-   Fixed the width of the `Button`

## 10-14-23(MARS-2023-008) Chester - Anton

-   Fixed the width of the `Button`
-   Removed the Save PDF button temporarily.

## 10-14-23(MARS-2023-010) Sarah - Anton

-   Fixed the width of the `Button`
-   Removed the Save PDF button temporarily.

## 10-14-23(MARS-2023-011) Anton

-   Fixed the width of the `Button`

## 10-12-23(MARS-2023-002) Anton

-   Updated `README`

## 10-11-23(MARS-2023-002) Anton

-   Fixed the minor issue in `Button` component, where it only accepts `string`
    prop type for `text`. Added `object` and `func` prop types
-   Uploaded Mars banner
-   Updated `package.json` added `npm i` on script `start`
-   Added `BgBlobGradient1` and `BgBlobGradient2` to the `Dashboard Layout`
-   Added `aria-hidden="true"` to `BgGradient` component
-   Created `README`

## 10-10-23(MARS-2023-011) Anton

-   Added the `windowSize` context to check the window size and set the `isAnimated`
    state to true if the screen size is greater than or equal to `576px`
-   Converted the `rem` to `em` of the `padding` and `gap`
-   Added `value`, `onChange`, `buttonType`, `Icon`, and `animated` to the `Input`
    component for search.
-   Added a `form` element to the `Input` component.
-   Added icon to the `Button` of Add button

## 10-10-23(MARS-2023-009) Camil - Anton

-   Removed the `checkScreenSize` function and replaced with the `windowSize` context.
-   Added icon to the `Button` of Add button
-   Removed the outer `div` that returns in jsx. Replaced it to a `React.Fragment`

## 10-10-23(MARS-2023-003) Camil - Anton

-   Removed the `checkScreenSize` function and replaced with the `windowSize` context.
-   Changed the `findFriends` state to `search` state
-   **(Error)** Changed the `Input` type from `findFriends` to `search`
-   Added icon to the `Button` of Add button

## 10-10-23(MARS-2023-005) Anton

-   Fixed a minor UI bug when the `LandingPage` initially loaded it will not calculate
    the height of the `nav` and subtract to `hero` height.
-   Used the `windowSize` context.

## 10-09-23(MARS-2023-002) Anton

-   Fixed the `moderate` vulnerability in `postcss` dependency by updating the package
-   Created a `windowSize` context in `HomeLayout`
-   Removed the state of `windowSize` in `DashboardPage` and replaced
    with the `windowSize` context from `HomeLayout`
-   Removed the state of `windowSize` in `BigSidebar` and `SmallSidebar` and replaced
    with the `windowSize` context from `HomeLayout`

## 10-05-23(MARS-2023-002) Anton

-   Deleted `AccountSettings.js` styled component
-   Deleted `Tickets.js` styled component
-   Renamed the `Box.js` styled to `Box-bak.js`
-   Removed the comment in `_fonts.scss`
-   Created `_utils.scss` file
-   Added `::selection` color aligned with the colors of MARS
-   Added custom `scrollbar` to align the color of MARS
-   Added `PropTypes` in `CustomTooltip` component
-   Added `LineChart`, `AreaChart` in `DashboardPage`
-   Added a custom `animationDuration` and created a function to have a random number.
-   Made all the charts fully responsive in all screen sizes

## 10-04-23(MARS-2023-002) Anton

-   Created `BarChart` in `DashboardPage`

## 10-03-23(MARS-2023-002) Anton

-   Added a function when the screen size is large `>=992`,
    it will automatically open the sidebar.
-   Added a function when the screen size is med `<992`,
    it will automatically close the sidebar.
-   Installed `recharts` library
-   Created charts in `DashboardPage`

## 10-02-23(MARS-2023-002) Anton

-   Added `scrollTo` plugin to scroll to top every change of `pathname` in location

## 10-02-23(MARS-2023-012) Anton

-   Created the layout for `ErrorPage`
-   Created the SVG for `ErrorPage`

## 09-29-23(MARS-2023-002) Anton

-   Added `kill()` method in return to clean up the animation in `ScreenChecker`
    component
-   Removed the rendering of the `main-content` in `DOM` when the screen size
    is below `320px`. This is to enhance the performace of the web app and for security.
    The user cannot see the content of the DOM if the screen size is lower than `320px`
-   Removed the rendering of `ScreenChecker` component when the screen size is
    larger than `320px` in `HomeLayout` component
-   Added and exposed `data-animate` custom attribute that can be used
    through out the web app. If the `data-animate` is used,
    it can animate the children and stagger

## 09-28-23(MARS-2023-002) Anton

-   Added new variant in button `neutral`
-   Refactor the code in `Button` component
-   Changed the background color in `hover` state in primary button
    from `bg-accent` to `#B80000`
-   Added new color for `success` and `error`

## 09-27-23(MARS-2023-002) Anton

-   Installed the `react-to-print` package

## 09-27-23(MARS-2023-005) Anton

-   Added a clean up in gsap animation in `Landing` and `HeroImg` component.
    Added `.kill()` method in return to clean up the animation when the route changed.
-   Used the `useRef` hook for `gsap timeline`.

## 09-27-23(MARS-2023-007) Anton

-   Added a clean up in gsap animation in `LoginPage` and `LoginGraphic` component.
    Added `.kill()` method in return to clean up the animation when the route changed.
-   Used the `useRef` hook for `gsap timeline`.
-   Replaced the `Input` component with the `InputFloatingLabel` component
-   Converted the function to arrow functions

## 09-26-23(MARS-2023-002) Anton

-   Fixed the UI bug in `InputFloatingLabel` where the `label` is overlapping
    to the `input` element

## 09-25-23(MARS-2023-002) Anton

-   Added support for `Icon`
-   Added animation when `hover` and `focus-within`
-   Added `twMerge` for classes
-   Added `buttonType` prop to make the button `submit` or `button`
-   Added `dark:hover:bg-gray-80` to the background of Button input
-   Created `InputFloatingLabel`

## 09-22-23(MARS-2023-002) Anton

-   Created a custom input that the consumer can modify the icon inside
-   Added the `...rest` operator in props to accept any props

## 09-22-23(MARS-2023-011) Anton

-   Added `striped` and `numbered` props in `Table` component
-   Made the default to be `striped` and `numbered` to `true`
-   Added the search `Input` to the `TableForInvoicePage`
-   Added the `Add Button` in `TableForInvoicePage`
-   Added pagination in `TableForInvoicePage`
-   Added `max-width` and `scroll-x-auto` in `Table component`

## 09-21-23(MARS-2023-011) Anton

-   Created a fully resposive and fully reuseable `Table` component

## 09-20-23(MARS-2023-011) Anton

-   Created basic table for creation of table component

## 09-20-23(MARS-2023-007) Anton

-   Refactor the code in `LoginPage`.
-   Used the new `Button` component.

## 09-20-23(MARS-2023-002) Anton

-   Removed the pipe in code base
-   Added `rest operator` in `Button` component to accept all the possible props

## 09-19-23(MARS-2023-005) Anton

-   Refactor the code in `LandingPage`.
-   Used the new `Button` component.

## 09-19-23(MARS-2023-002) Anton

-   Refactor code in `Button` component.
-   Added `Icon` prop
-   Made the `onClick` and `Icon` prop, optional

## 09-18-23(MARS-2023-005) Anton

-   Used the new `Button` component in Landing page

## 09-18-23(MARS-2023-002) Anton

-   Added more `title` state in Dashboard, to set the Title in each page
-   Added background in every page of components
-   Created `Button` component
-   Added border radius in `DashboardLayout` content

## 09-16-23(MARS-2023-002) Anton

-   Converted the `dashboard-page` class in DashboardLayout to tailwindcss
-   Added `title` state in Dashboard, to set the Title in each page
-   Created `DashboardPage`
-   Created `TableForInvoicePage`
-   Added Dashboard and Table for invoice routes

## 09-15-23(MARS-2023-007) Anton

-   Separate the `useEffect` hook in calculating the window height and GSAP animations,
    to prevent the unnecessary re-renders of GSAP animations
    everytime the window is resized

## 09-15-23(MARS-2023-005) Anton

-   Separate the `useEffect` hook in calculating the window height and GSAP animations,
    to prevent the unnecessary re-renders of GSAP animations
    everytime the window is resized

## 09-15-23(MARS-2023-002) Anton

-   Converted the `SmallSidebar` and `BigSidebar` from Styled Components to Tailwind
-   Fixed the order of the `BigSidebar` and `SmallSidebar` in DOM.
    The `z-index` of sidebars are now higher than the `Navbar`.
-   Fixed the `Navbar` order, make it higher than the contents of the page.
-   Removed the Styled components for `BigSidebar` and `SmallSidebar`

## 09-14-23(MARS-2023-002) Anton

-   Fixed the navbar to top by adding `z-index-20`
-   Added box shadow in navbar to add more depth
-   Added Invoice Details in navlinks
-   Added `bg-base-200` in BigSidebar
-   Removed unneccessary classes in `NavLinks` component
-   Converted the `BigSidebar` from styled components to tailwind

## 09-13-23(MARS-2023-007) Anton

-   Fixed the `BgGradient` animation where it loads twice

## 09-13-23(MARS-2023-005) Anton

-   Added `tailwind-merge` package to merge the classnames in a component
-   Changed the accent color in dark mode using tailwind config
-   Added `ScreenChecker` component to check the screen
    if it is less than 320px or greater.
-   Removed the `blobBottom` at the Landing page

## 09-13-23(MARS-2023-007) Anton

-   Added `BgGradient` component

## 09-12-23(MARS-2023-007) Anton

-   Added useState to login form inputs
-   Added array of objects for formInputs to add dynamic functionality to form inputs.
-   Adjusted the Login Graphic animation, removed the animation when
    the screen size is below `992px(lrg)`
-   Renamed the `InputNormal` component to `Input`
-   Fixed the UI bug in LoginPage where the main container does not calculate
    the nav height on first mount.
-   Changed the settings in Prettier config

## 09-11-23(MARS-2023-007) Anton

-   Added more GSAP animations in Login page login graphic
-   Added blur shape at the background of login page
-   Added prop types in Input normal component
-   Added support for labelText `false`. When `false` passed as prop in
    `labelText`, it will not render the `<label>`
-   Added support `className` for `<InputNormal>`
-   Added useState to the formInputs

## 09-08-23(MARS-2023-007) Anton

-   Created login page
-   Created FormInput Component to make it reuseable
-   Added navbar to show the logo in login page
-   Added two column layout in large screen sizes
-   Added SVG Graphic in large screensize
-   Added form inputs
-   Added form button
-   Added GSAP Animations to Login page

## 09-07-23(MARS-2023-007) Anton

-   Started the login component
-   Changed the Navbar center from anchor tag to button
-   Fixed the Navbar to sticky top 0
-   Make the big sidebar and small sidebar overflow-y scroll
-   Added blur and opacity bg when the small navbar is shown

## 09-07-23(MARS-2023-005) Anton

-   Fixed some UI bugs in light mode and dark mode in Landing page

## 09-06-23(MARS-2023-005) Anton

-   Added GSAP Animations to Hero image svg
-   Created the Landing page
-   Added Sansation font face
-   Added hero subtitle
-   Made the font of the hero title bigger on big screen sizes
-   Adjusted the blogTop to top right
-   Adjusted the colors of the texts in hero section
-   Added Login button
-   Added invisible class to load the elements in visibility hidden
-   Added global line-height 1.8
-   Added more themes; coffee, business, and night

## 09-05-23(MARS-2023-005) Anton

-   Created Landing page
-   Created hero in landing page
-   Created button in landing page
-   Created animations in landing page

## 09-04-23(MARS-2023-002) Anton

-   Created BigSidebar
-   Created SmallSidebar
-   Created the drop down menu for logging out user
-   Added more Navlinks

## 09-01-23(MARS-2023-002) Anton

-   Created BigSidebar
-   Created SmallSidebar
-   Configured the tailwind config, added the color pallete of MARS

## 08-31-23(MARS-2023-002) Anton

-   Removed the tailwind elements library and replaced to daisyUI
-   Created Navbar
-   Created Small Sidebar component

## 08-30-23

-   Added initial files
-   Configured tailwind
-   Confifured tailwind elements
-   Created Dashboard layout
-   Created Home layout
-   Added react-router-dom
