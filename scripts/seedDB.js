const mongoose = require('mongoose');
const db = require('../server/db/models');
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/mern-passport',
  {
    useMongoClient: true,
  }
);

const Submission = [
  {
    topic: "Women's Healthcare",
    pullquote: "Protect every woman's right, my family depends on it",
    language:
      "Heart Felt Quote Here",
    date: new Date(Date.now()),
  },
  {
    topic: 'Immigration Policy',
    pullquote: 'We are all Americans, the melting pot is better for it', 
    language:
      'I am writing to ask that you please support (legislation similar to) Rep. Gutierrez’s Comprehensive Immigration Reform for America’s Security and Prosperity Act of 2009 (CIRASAP), H.R. 4321. As a Unitarian Universalist and an American, I value fair treatment for all people, as well as security and economic growth. We need more than enforcement-only policies that tear families apart yet do nothing to address systemic issues like the lack of visas and exploitative business practices. Although immigrants are suffering the most, the problems caused by our broken immigration system affect us all. Only Congress can deliver what we need: comprehensive immigration reform that recognizes the valuable role and rights of immigrants while promoting security and economic recovery.',
    date: new Date(Date.now()),
  },
  {
    topic: 
        "EPA's Budget",
    pullquote: 'The Environment needs a voice.'
    language:
        "I am writing to ask you to reject President Trump's fiscal year 2019 proposal to slash EPA's budget by approximately 23 percent and cut essential staff. The President's proposal could have a devastating impact on New York's water, air and public health. For just 0.21% of the federal budget, the EPA yields tremendous environmental, health and economic benefits for the people of New York and the United States. Congress should reject the administration's proposal to slash programs and EPA's public servants. I refuse to go back to the days when the Hudson River was treated like an open sewer and polluters were unaccountable to the American people. A strong EPA is in the best interest of your constituents. Be a hero for New York's environment and oppose President Trump and Scott Pruitt's budget request to dismantle the EPA. ",
    date: new Date(Date.now()),
  },
  {
    topic: 
        'Abstinence Only Schooling',
    pullquote: 'Real life Sex Education is Key',
    language: 
        'I am a parent who is committed to my daughter and all young people receiving responsible sexuality education that includes medically accurate information about both abstinence and contraception. I have recently been informed that Congress is considering additional funding for ineffective, abstinence-only-until-marriage programs that censor vital information about contraception, and I am outraged.',
    date: new Date(Date.now()),
  },
  {
    topic: 
        'Affordable Care Act',
    pullquote: 'No one should drown under the weight of medical debt',
    language: 
        'I urge you to oppose any effort to repeal the Affordable Care Act (ACA) without a concurrent replacement plan that protects poor and vulnerable people, including immigrants, safeguards the unborn, and supports conscience rights. In a letter dated January 18, I encouraged Congress to work in a bipartisan fashion to protect vulnerable Americans and preserve important gains in health care coverage and access.  Reiterating principles articulated when the ACA was being debated, the letter sent stressed that:  "All people need and should have access to comprehensive, quality health care that they can afford, and it should not depend on their stage of life, where or whether they or their parents work, how much they earn, where they live, or where they were born. I believe health care should be truly universal and it should be genuinely affordable.',
    date: new Date(Date.now()),
  },
  {
    topic: 
        'Medical Research Funding',
    pullquote: 'Research funding has never been more necessary',
    language: 
        'As a scientist and a constituent, I urge you to support an increase in funding for the National Institutes of Health (NIH) bringing funding to at least $XX billion for FY(target year). NIH research is the foundation for future medical breakthroughs, which will save lives and money. The federal government’s investment in research must be sustained in order to translate today’s scientific findings into tomorrow’s bedside treatments. NIH funding supports my research on <insert a summary of your research and the potential benefits of this research>. Recent discoveries, such as those listed below, are a direct result of robust funding for the NIH.',
    date: new Date(Date.now()),
  },
  {
    topic: 
        'Gun Control',
    pullquote: 'Enough is enough. No one else needs to die.',
    language: 
        'The time for reasonable restrictions on gun ownership is long overdue. We’ve already endured far too many mass shootings of innocent Americans, including children who barely started their first year of school. How many more of these tragedies must happen before our representatives in Washington do something about it? Our Constitutional rights are not unlimited. The First Amendment right to free speech doesn’t mean you can slander someone or yell “fire” in a crowded theater. The need for order and safety dictates that restrictions are necessary for public protection. The same logic plainly applies to guns. The National Rifle Association’s proposed solution to introduce more guns into our schools isn’t the answer. More guns only increase the potential for more killings, either by accident or theft of the weapons. Gun-wielding teachers would send the wrong message to our children who go to school to learn. Teachers don’t want the burden of being security guards, nor should they be expected to maintain the level of firearm proficiency to ensure their own safety if thrust into a shootout. We want teachers to focus on the education of our children, period.',
    date: new Date(Date.now()),
  },
  {
    topic: 
        'Campaign Finance Reform',
    pullquote: 'How can we drain the swamp when the 1% controls elections?',
    language: 
        'I’m very concerned about the direction our country is headed, and I believe it’s time to change the way we elect our political leaders. The voices of the American people are being drowned out by big money – the kind of money that only corporations, special interest groups, and powerful lobbyists can afford to pay. In this recent election, we’re talking about billions of dollars spent, not millions. What will be the total amount spent in 2016? It’s more than just a money problem. Instead of paying attention to constituents, our politicians cater to the biggest donors looking for influence and political favors. While they deny they expect anything in return, these donors don’t fork over huge sums of money with no strings attached. No one believes that for a minute. With two-year terms, running for the House of Representatives is almost a year-round job. As soon as one election is over, the work begins on the next campaign. Fund raisers are scheduled and phone calls to potential donors are made. Adding insult to injury, they still earn their Congressional salaries while spending hundreds of hours campaigning for reelection. Why should politicians get paid for keeping their job and not doing their job?',
    date: new Date(Date.now()),
  },
  {
    topic: 
        'Healthcare Reform',
    pullquote: 'ACA saved my life.',
    language: 
        'More than 47 million Americans— disproportionately African-Americans, Hispanics and the working poor— are uninsured. As a result, they lack ready access to care, which causes unnecessary deaths, increases morbidity among the acutely and chronically ill and results in higher costs. This situation is immoral and intolerable. I call upon the U.S. Congress to enact bipartisan legislation that assures access without barriers to affordable, basic, quality health care for all. Specifically, I urge Congress to support a health care system in which risks, costs and responsibility are shared by all.',
    date: new Date(Date.now()),
  },
];

db.Submission.remove({})
  .then(() => db.Submission.collection.insertMany(Submission))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
