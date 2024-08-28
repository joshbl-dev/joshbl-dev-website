# Joshbl-dev-website

## A personal digital portfolio

## Setup

1. Clone the repository
2. Run `yarn install` to install the dependencies
3. Run `yarn dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see
   the result.

## Home Page

The home page is the landing page of the website. It contains a brief
introduction of the website and the author.
It also contains a list of skills that the author has and a link to a resume.

## Projects Page

The projects page contains a list of projects that the author has worked on.
Each project has a title, a description, and a link to the project.
It also has a visual representation of the project and link to the project site
or source code.
Projects can be updated by adding a new project to the projects array in the
`constants.ts` file in `/types` folder.

## Bio Page

The bio page contains an overview of the author's educational background, work
experience, and interests.
Educational info can be updated in `educationInfo.json` in the `/public/data`
folder.
Work experience can be updated in `constants.ts` in the `/types` folder (also
update chipLinks in constants to allow clickable redirects).
Interests can be updated in `constants.ts` in the `/types` folder.

## Updating visual elements

The visual elements of the website can be updated by adding media files to the
`/public` folder.
Some hardcoded file paths may need to be updated in the code to reflect the new
file paths.

Color schemes can be updated in the `theme.ts` file in the `/styles` folder.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out
our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for
more details.
