# Changelogs Sarah

## 10-09-23 (MARS-2023-010) Sarah

-   Refactor codes.
-   Revert the `Save PDF` button.
-   Add `Loading.jsx` component to Pages folder.

## 10-05-23 (MARS-2023-010) Sarah

-   Remove the `Save PDF` button.
-   Comment out savePDF function/ console.log

## 10-03-23 (MARS-2023-010) Sarah

-   Added `loading-dots` animation after clicking the `Print Button` to Invoice Details.

## 10-02-23 (MARS-2023-010) Sarah

-   Added reusable -> animation component `data-animate` to parent elements of
    Invoice Details Component.
-   Added console.log for Save JPG button.
-   Added additional `Loading` Component for `Print Button`.

## 09-29-23 (MARS-2023-010) Sarah

-   Remove this code `{isLoading && <p className="text-5xl">THIS IS LOADING....</p>}`
    under Invoice Info
-   Added aditional props: `text-start` in the TableHead element.
-   Removed `console.log` of onBeforePrint & onAfterPrint Callback functions.
-   Added reusable -> animation component `data-animate` to parent elements
    of Invoice Details Component.

## 09-28-23 (MARS-2023-010) Sarah

-   Refactor code
-   Modified Text of Button From 'Print Invoice' to 'Print'
-   Modified Text of Button From 'Edit' to 'Save PDF'
-   Modified the margin and padding classes from `rem` to `em`
-   Modified handlePrintOnClick for Loading function -> Added `useReactToPrint`
    props: onBeforePrint & onAfterPrint Callback functions
-   Added function in `documentTitle` props of "Print Invoice" Format `Sarah_Caballero_Invoice_MM_DD_YYYY_HH_mm_SS`

## 09-27-23 (MARS-2023-010) Sarah

-   Completed `Invoice Details` component.
-   Added `MARS` logo, reusable component from `MarsLogo.jsx` for
    "Print Invoice" print button.
-   Added function "Print Invoice" button using react-to-print library.
-   import { useReactToPrint } from 'react-to-print'
-   import { useRef } from 'react'

## 09-25-23 (MARS-2023-010) Sarah

-   Added additional div element for Print Invoice & Edit - Button
-   Import react-icons for Buttons.

## 09-22-23 (MARS-2023-010) Sarah

-   Completed the 'Receipt' Section (Responsivenes,Lightmode&Darkmode)
    to `InvoiceDetails` component.

## 09-21-23 (MARS-2023-010) Sarah

-   Code review `InvoiceDetails` component.
-   Replace each section of Flexbox container to Grid container.

## 09-20-23 (MARS-2023-010) Sarah

-   Modified the `<div>` element for 'Amount or Receipt' section to `<table>`
    element `InvoiceDetails` component.

## 09-19-23 (MARS-2023-010) Sarah

-   Completed the Client, Item Name and User Profile section responsiveness,
-   Added additional `<div>` for Amount or Receipt section for
    Lightmode to `InvoiceDetails` component.

## 09-18-23 (MARS-2023-010) Sarah

-   Added aditional `<div>` for Client, Item Name, Price, & Quantity,
-   Added the icon for User Profile
-   Modified font-size, font weight,
-   Modified font-colors for Lightmode to `InvoiceDetails` component.

## 09-16-23 (MARS-2023-010) Sarah

-   Modified text and created responsive layout of elements,
-   Modified font colors for Lightmode & Darkmode to `InvoiceDetails` component.

## 09-15-23 (MARS-2023-010) Sarah

-   Added initial div and elements to `InvoiceDetails` component.
