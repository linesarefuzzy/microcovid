const title = 'Introduction'

const content = `

You’re already familiar with some rules of thumb for avoiding COVID-19 infection: wear a mask, stay 6 feet apart, and only socialize outdoors. But you might not know how to compare different activities: Is it riskier to go grocery shopping, or to take a Lyft or Uber? It’s tough to make good choices when you don’t know how large or small the risks really are.

We, the authors, were really struggling with this. We wanted a rigorous way to make decisions about COVID risk. So we read some papers and crunched the numbers. We trawled the scientific literature for data. We spent hours combining data sources into a simple model. And in this writeup, we’ll share what we have learned (and some practical tools!) with you.


We’ll show you:

- how we estimate COVID infection risk, in units of “microCOVIDs”
- how risky we think various common activities are
- how you can estimate the COVID risk of your own actions (using our handy-dandy [calculator](/calculator))
- and, most importantly, how to make decisions that balance living your life with safety and health.

If you want to skip the intro & framing and just use the calculator tool, click [here](/calculator).

## Important Context

Unlike a scientific or medical standard of evidence, this project is an effort to state our best estimate based on available evidence, even when that evidence is not conclusive. This work reviews and synthesizes existing research; it is not a primary source of new information about COVID. We are not experts on this topic. This work has not been scientifically peer-reviewed. There is still a lot of uncertainty about COVID. Do not rely on this tool for medical advice.</b>

## About us
This article (and corresponding calculator) was collaboratively written by the members and friends of Ibasho, a communal house in San Francisco. We are not experts on COVID.

Our goal is to protect our broader community’s physical and mental health during the pandemic, by enabling individuals to make balanced, evidence-based decisions.

## About you
You’re in the target audience of this white paper if you are comfortable with numbers and want to think about how your personal choices affect your chance of getting COVID-19.

We are not focusing on society-wide pandemic dynamics, policy responses, or suggestions for public health officials. We have focused on making our model easy to use and understand by people in our community.


## How to navigate this white paper

Use the “previous” and “next” links at the top or bottom of the page to navigate from one section to the next.

Footnotes[^demo] usually contain nerdy details for detail-loving readers, and often a link to even more gory detail in the [Research Sources](/paper/14-research-sources) section.


## Authors:

**Cite us collectively as:** The Ibasho community. We are members and friends of Ibasho, a communal house in San Francisco.

**White paper:** Catherine Olsson, Joshua Oreman, Rhys Lindmark, Anna Tsykalova, Stephanie Bachar, Sarah Dobro, Matt Bell

**Website and calculator:** Dominic Dagradi, Benjamin Shaya, Joshua Oreman, Sarah Dobro, Deb Lyon, Catherine Olsson

_Feedback & assistance thanks to: Ajeya Cotra, Andrew Critch, Andy Matuschak, Ben Shaya, Danny Hernandez, David Mears, Derek Foster, Elliot Olds, Eugene Shvarts, Jacob Falkovich, Jeremy Howard, Jessica Watson Miller, Ivan Gayton, Katja Grace, Matt Bell, Peter Hurford, Zvi Mowshowitz, and other friends who chose to remain anonymous. (Giving feedback does not imply endorsement of, or agreement with, this writeup.)_

---


[^demo]: Throughout the text, you will see footnotes like this. Usually they will have some content, but this one is just a demo! You can click the arrow to return to where you came from in the text:

`

const post = { title, content }
export default post
