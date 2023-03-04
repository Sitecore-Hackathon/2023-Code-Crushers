![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

# Sitecore Hackathon 2023

-   MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
-   [Entry form template](ENTRYFORM.md)

### ⟹ [Insert your documentation here](ENTRYFORM.md) <<

# Hackathon Submission Entry form

## Team name

Code Crushers

## Category

Enhacements to SXA Headless

## Description

-   We have built a demo site where we have introduced a few helpers to enhance SXA headless.
    Our site consits of 3 pages and 6 modules, some of which have been statically bound. Our alerts and footer specifically, are using our Static Binding component which we have called Rendering. This component expects 2 parameters, the component name that we want to bind and the guid for the datasource which is optional. This allows to mimic the Rendering helper function we are used to on a regular MVC solution. We decided to create this component because we did not find a way to statically bind components.

-   Also, we used the High Order Component pattern to create a component that easily allows us to get the datasource for a rendering, if a datasourse isn't used then our component takes the context item as the datasource. This basically helps speed up the development process and have consistency throughout a solution.
-   Our demo site also serves as a SXA starter kit with modules for Header, Footer, Alerts, S Curves, Masthead, etc. This module also support variations you will also see how we have built components and how we have used our helper componentes everywhere

## Video link

[Demo Video Link](#video-link)

## Pre-requisites and Dependencies

-   Sitecore 10.3 XM with SXA Headless (SIA)
-   Sitecore CLI 5.1.25 (Serialization)
-   Node JS
-   JSS CLI
-   Experience Edge (Graphql)

## Installation instructions

#### Sitecore Setup

1. Install Sitecore 10.3 XM with SXA using SIA
2. Install Sitecore CLI
3. Login to Sitecore CLI
4. Run `dotnet sitecore ser push`
5. Publish site

#### Rendering Host Setup

1. Go to `src/Hackathon2023`
2. Install JSS CLI - `npm install -g @sitecore-jss/sitecore-jss-cli`
3. Run `Set ExecutionPolicy Unrestricted`
4. Run `npm i`
5. Run `$env:NODE_TLS_REJECT_UNAUTHORIZED=0` - This is needed if Sitecore instance is running over http and Nextjs is running over http
6. Run `jss setup`
    - Note: Api Key is serialized in the project, make sure you use `{5CE2A14E-6F26-4ED2-BC8B-D49A81360720}`
7. Run `jss deploy config`
8. Run `jss start:connected`

### Configuration

Make sure that .env is setup accordingly to your Sitecore Instance.

## Usage instructions

### Static Rendering Binding

Usually, as a Sitecore developer you might want to add a component directly in the layout as we were used in a regular MVC Project as follows `@Html.Sitecore.Rendering('')`. We noticed that this approach was not possible with existing JSS tools that come OOTB. Our new Rendering component can be used like this.

```tsx
import Rendering from "components/sxa-extensions/Rendering";

<Rendering
    datasourceID="{45B9ED06-8E0B-4685-8BD0-868ED3552BCC}"
    componentName="AlertBanner"
/>;
```

-   **Datasource ID** : (Optional) Path or GUID of datasource associanted to the rendering
-   **Component Name**: Name of the NextJs Component

### Sitecore Context Item Fallback for Component

Similarly to `withDatasourceCheck` that comes OOTB to enforce a component to have a Datasource, we created a new High-Order component called `withDatasourceRendering` that is meant to help developers code faster by automatically checking for a Datasource if available, if not the datasource will fallback to the context item.

```tsx
export default withDatasourceRendering()<HomepageMastheadProps>(
    HomepageMasthead
);
```

This pattern takes the Component and validates if the rendering has any datasource to return fields as normal call otherwise fields will be populated with `useSitecoreContext`

### Quickstart Modules available for reuse.

#### Alerts

-   Alert Banner
    ![Alert Banner](docs/images/modules/AlertBanner.png?raw=true "Alert Banner")

#### Content

-   Call To Action

-   S Curve
    ![S Curve](docs/images/modules/SCurve-Left.png?raw=true "S Curve")
    ![S Curve](docs/images/modules/SCurve-Right.png?raw=true "S Curve")

#### Mastheads

-   Homepage Masthead
    ![Homepage Masthead](docs/images/modules/HomePageMasthead.png?raw=true "Homepage Masthead")

#### Navigation

-   Header
    ![Header](docs/images/modules/Header.png?raw=true "Header")
-   Footer
    ![Footer](docs/images/modules/Footer.png?raw=true "Footer")

---

![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
