<p align="center">
  <a href="https://croct.com" target="_blank">
    <picture>
        <source media="(min-width: 769px) and (prefers-color-scheme: light)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-light.svg">
        <source media="(min-width: 769px) and (prefers-color-scheme: dark)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-dark.svg">
        <source media="(max-width: 768px) and (prefers-color-scheme: dark)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-dark-mobile.svg">
        <source media="(max-width: 768px) and (prefers-color-scheme: light)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-light-mobile.svg">
        <img src="https://raw.githubusercontent.com/croct-tech/plug-js/refs/heads/update-readme/.github/assets/header-light-mobile.svg" alt="Croct Next.js SDK" title="Croct Next.js SDK" width="100%">
    </picture>
  </a>
  <br/>
  <strong>Croct Next.js SDK</strong><br/>
  Bring dynamic, personalized content natively into your applications.
</p>
<div align="center">
    <strong>📘 <a href="https://docs.croct.com/reference/sdk/nextjs/installation">Quick start &rarr;</a></strong>
</div>
<br/>
<p align="center">
    <a href="https://www.npmjs.com/package/@croct/plug-next"><img alt="Version" src="https://img.shields.io/npm/v/@croct/plug-next"/></a>
    <a href="https://codeclimate.com/repos/66391248a64e53247c8aed61/test_coverage"><img alt="Coverage" src="https://api.codeclimate.com/v1/badges/10e7c6cc904b72515314/test_coverage"/></a>
</p>

## Introduction

Croct is a headless CMS that helps you manage content, run AB tests, and personalize experiences without the hassle of complex integrations.

This is an example of a Croct integration using Next.js SSR.

## Installation

1. Run this command to install the dependencies:

```sh
npm install
```
2. Create your account at [Croct](https://app.croct.com/)
3. Create .env.local file and add your appId and APIKey
4. Create the component using this schema:
   `
   {
  "type": "structure",
  "title": "Pricing section",
  "attributes": {
    "preTitle": {
      "type": {
        "type": "text",
        "minimumLength": 1
      },
      "label": "Page pre-title",
      "position": 0,
      "description": "A short text displayed above the page title."
    },
    "title": {
      "type": {
        "type": "text",
        "minimumLength": 1
      },
      "label": "Page title",
      "position": 1,
      "description": "The main title of the page."
    },
    "subtitle": {
      "type": {
        "type": "text",
        "minimumLength": 1
      },
      "label": "Page subtitle",
      "position": 2,
      "description": "A two-line text displayed below the page title."
    },
    "defaultFrequency": {
      "type": {
        "type": "text",
        "choices": {
          "monthly": {
            "label": "Monthly"
          },
          "annually": {
            "label": "Annually"
          }
        }
      },
      "label": "Default frequency",
      "position": 3,
      "description": "The billing frequency selected by default."
    }
  },
  "description": "The pricing section."
}
   `
6. Create the slot using this schema:
   `
    {
  "type": "structure",
  "attributes": {
    "title": {
      "type": "text",
      "value": {
        "type": "static",
        "value": "Pricing plans for teams of all sizes"
      }
    },
    "preTitle": {
      "type": "text",
      "value": {
        "type": "static",
        "value": "Pricingg"
      }
    },
    "subtitle": {
      "type": "text",
      "value": {
        "type": "static",
        "value": "Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
      }
    },
    "defaultFrequency": {
      "type": "text",
      "value": {
        "type": "static",
        "value": "monthly"
      }
    }
  }
}
   `
8. Start the project

## Documentation

Visit our [official documentation](https://docs.croct.com/reference/sdk/nextjs/installation).

## Support

Join our official [Slack channel](https://croct.link/community) to get help from the Croct team and other developers.

## License

This library is licensed under the [MIT license](LICENSE).
