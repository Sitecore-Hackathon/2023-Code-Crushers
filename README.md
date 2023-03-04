![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

# Sitecore Hackathon 2023

-   MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
-   [Entry form template](ENTRYFORM.md)

### ⟹ [Insert your documentation here](ENTRYFORM.md) <<

# Hackathon Submission Entry form

You can find a very good reference to Github flavoured markdown reference in [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). If you want something a bit more WYSIWYG for editing then could use [StackEdit](https://stackedit.io/app) which provides a more user friendly interface for generating the Markdown code. Those of you who are [VS Code fans](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) can edit/preview directly in that interface too.

## Team name

Code Crushers

## Category

Enhacements to SXA Headless

## Description

-   We have created various helpers to allow developers to start working with SXA Headless easily. This helpers will speed up the development process.
-   Since we couldn't find a way to easily add static binding on a Headless layout we created a component to help with this. Also, we created a HOC to seamlessly fallback to the context item if there's no datasource selected. This will work as the base for more helper components in the future.

## Video link

⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. _Just remember to update the link below_

⟹ [Replace this Video link](#video-link)

## Pre-requisites and Dependencies

-   Sitecore 10.3 XM with SXA Headless (SIA)
-   Sitecore CLI 5.1.25 (Serialization)
-   Node JS
-   JSS CLI
-   Experience Edge (Graphql)

## Installation instructions

⟹ Write a short clear step-wise instruction on how to install your module.

> _A simple well-described installation process is required to win the Hackathon._  
> Feel free to use any of the following tools/formats as part of the installation:
>
> -   Sitecore Package files
> -   Docker image builds
> -   Sitecore CLI
> -   msbuild
> -   npm / yarn
>
> _Do not use_
>
> -   TDS
> -   Unicorn

for example:

#### Sitecore Setup

1. Use the Sitecore Installation wizard to install the [package](#link-to-package)
2. ...
3. profit

#### Rendering Host Setup

### Configuration

⟹ If there are any custom configuration that has to be set manually then remember to add all details here.

_Remove this subsection if your entry does not require any configuration that is not fully covered in the installation instructions already_

## Usage instructions

### Static Rendering Binding

Usually, as developer you might need to add a component directly in the layout `@Html.Sitecore.Rendering('')`.

```tsx
import Rendering from "components/sxa-extensions/Rendering";

<Rendering
    datasourceID="{45B9ED06-8E0B-4685-8BD0-868ED3552BCC}"
    componentName="AlertBanner"
/>;
```

-   **Datasource ID** : Path or GUID of datasource associanted to the rendering
-   **Component Name**: Name of the NextJs Component

### Sitecore Context Item Fallback for Component

In some scenarios, Instead of checking for a datasource connected to a component. You will need a fallback to context item. But your code will be much cleaner if you just use the following HOC pattern.

```tsx
export default withDatasourceRendering()<HomepageMastheadProps>(
    HomepageMasthead
);
```

This pattern takes the Component and validates if the rendering has any datasource to return fields as normal call otherwise fields will be populated with `useSitecoreContext`

![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

You can embed images of different formats too:

![Deal With It](docs/images/deal-with-it.gif?raw=true "Deal With It")

And you can embed external images too:

![Random](https://thiscatdoesnotexist.com/)

## Comments

If you'd like to make additional comments that is important for your module entry.
