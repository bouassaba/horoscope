import cn from 'clsx'

export default function HomePage() {
  return (
    <article className={cn('prose', 'dark:prose-invert')}>
      <h1>Horoscope</h1>
      <p>
        A horoscope is an astrological chart or diagram representing the
        positions of the Sun, Moon, planets, and other celestial points at a
        specific moment in time, typically the exact time of a person’s birth.
        This chart serves as a map of the heavens, used in astrology to
        interpret how celestial bodies influence an individual’s personality,
        relationships, and life events. The term originates from the Greek words
        “hora” (time) and “skopos” (observer), reflecting its purpose as a
        time-based celestial observation.
      </p>
      <p>
        Astrology divides the sky into 12 sections, known as the zodiac signs,
        each associated with specific personality traits and symbolic meanings.
        These signs are determined by the apparent position of the Sun during
        different times of the year. The most common form of horoscope is the
        daily or weekly forecast, where astrologers provide predictions or
        insights based on an individual’s zodiac sign. These forecasts consider
        the current movements and alignments of celestial bodies relative to the
        zodiac.
      </p>
      <p>
        While horoscopes are widely popular in entertainment media, astrology is
        not considered a science. Its principles are rooted in ancient
        traditions and beliefs rather than empirical evidence. Despite this,
        many people find value in horoscopes for self-reflection, guidance, or
        as a cultural or spiritual practice. Whether taken seriously or enjoyed
        as a casual diversion, horoscopes have a long-standing presence in human
        culture.
      </p>
    </article>
  )
}
