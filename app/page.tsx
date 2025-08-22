"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink, Facebook, Youtube, Music, Video } from "lucide-react"

// Artist data from the JSON
const artistData = {
  artist: {
    name: "DNT T-Rex",
    tagline: "From the Streets to the Beat",
    bio: "Rising from the underground, DNT T-Rex delivers an unapologetic mix of street energy and sharp lyricism. His sound blends raw storytelling with heavy beats, drawing from the grit of classic hip-hop and the intensity of modern trap. Through vivid bars and bold presence, he reflects a life of hustle, ambition, and unshakable confidence.",
    location: "San Antonio, TX",
    yearsActive: "2017 - Present",
  },
  featuredSong: {
    title: "Cowboy",
    album: "The Stompin Grounds - in loving memory",
    duration: "3:42",
    spotifyId: "https://music.apple.com/us/artist/dnt-t-rex/1625192505",
    amazonMusicUrl: "https://open.spotify.com/intl-es/artist/3zMXNhpoTEA0OYBghRoZH5",
    appleMusicUrl: "https://music.apple.com/us/song/cowboy/1723931217",
    coverArt: "/T-Rex.webp",
    description: "A rapper from New Orleans who mixes street life with the essence of the modern cowboy, riding a horse instead of in a car, with pride, toughness, and hip-hop style. Now rolling in San Antonio, Texas.",
  },
  discography: [
    {
      title: "Boss up an Prepared",
      year: "2023",
      type: "Album",
      tracks: 18,
      coverArt: "/bossupcover.webp",
      spotifyUrl: "https://music.apple.com/us/album/boss-up-an-prepared/1718813846",
    },
    {
      title: "The Stompin Grounds",
      year: "2023",
      type: "Album",
      tracks: 13,
      coverArt: "/TheStompin.webp",
      spotifyUrl: "https://music.apple.com/us/album/the-stompin-grounds/1723931212",
    },
    {
      title: "Gemini",
      year: "2024",
      type: "Album",
      tracks: 9,
      coverArt: "/geminis.webp",
      spotifyUrl: "https://music.apple.com/us/album/gemini/1756178754",
    },
        {
      title: "Still Onn tha Grind",
      year: "2025",
      type: "Album",
      tracks: 9,
      coverArt: "/stillonnthaGrind.webp",
      spotifyUrl: "https://music.apple.com/us/album/still-onn-tha-grind/1812473046",
    },
  ],
  lyricsSnippets: [
    {
      song: "Cowboy",
      snippet:
        "Country it's time to settle up like I'm about to ride on my horse I'm a goddamn cowboy I don't need no car I ride on my I'm a godamn cowboy I really like my 40 but I might give it up I'm a goddamn Cowboy I'm from New Orleans I'm a do but I still like the cowboy stay stra that's how you got to be so white I'm a goddamn Cowboy ride around the city like I'm ride around on my uhhuh I'm a goddamn cowboy you going run up get done... " },
    {
      song: "Activated",
      snippet:
        "Ain't no need to act tough, I be chillin' Rollin' up straight raw, in a car, chiefin'  You can talk down on my name like you're teachin' Just give me a reason, I'll leave you bleedin' The way she shake and clap, that thing she always teasin' Smokin' hella perp, eatin' brownies for no reason Every single day, gettin' money for a reason That shit I do hot, but I'm cold for no reason 2 plus 2, you could call me 4 season Gotta be everywhere, like I live in different regions Niggas act tough, really call themselves a demon 40 with that 16 clip, switch it up, yeah, redeem ya Really said a lot, but ain't sayin' nothin' when I seen ya I be ridin' in a Chevy, but my pilot drive a Beamer I'll take your girl, now tell me, have you seen her? But I'm too real for that shit, cause I don't need her You can think I'm slippin', but I always keep the heater Wet your ass up ...",
    },
    {
      song: "So Fly",
      snippet:
        "Yeah. Got my eyes on a prize. Got money on my mind. Sometimes a nigga fall, but I'm destined to rise. Bitch, I'm back built. Yeah, I'm bout to make you cry 50-50 split, got my piece of the pie Yeah, I'm so fly, I'm so fly I'm so fly, I'm so fly Let's get high, let's get high, let's get high Let's get high, I'm so fly I'm so fly, I'm so fly I'm so fly, thank God, thank God, thank God Thank God I'm fly, got a piece of the pie Always so high, really don't know why Don't look me in the eye  Pain hits so quick, you don't really know why When you start to cry, you gon' be like this YYYY, oh why? Back built up bitch I don't never really quit Took a break real quick Now I'm back in this bitch Bout to make your ass sick I'll run it up quick I don't trick, I don't shit This ain't Halloween bitch Looking for a little treat Trying to act all sweet I ain't really no fool Trying to use me like a tool But I keep that tool I'll use that tool Gotta keep my cool Can't be no fool Got too much to lose Hungry, I always need food Slow it down, I'm screwed She naked like Benu With the right attitude Thomas show grounder to let me see that as move up and down the clap to All that ass in the way she move got a nigga in the groove bad bitch So fine got my stamp cuz she approved cute face nice waist and she graduated to see Fuckin with a nigga cuz you know a nigga so so fly to ain't gotta dress just to impress him what I do Fly nigga season DNT we on to [1.0s] Got my eyes on a prize Got money on my mind, sometimes a nigga fall But I'm destined to rise, bitch I'm back built up Yeah, I'm bout to make you cry 50-50 split, got my piece of the pie Yeah, I'm so fly, I'm so fly, I'm so fly Let's get high, let's get high, let's get high I'm so fly, I'm so fly, I'm so fly Thank God, thank God, thank God ",
    },
    {
      song: "Upshit",
      snippet:
        "Just that up shit Closed caption no subject Beat your ass in public Money is my subject just that up shit Damn uh damn Just that up shit uh damn Uh just that up shit uh Closed caption no subject Beat your ass in public Money is my subject this that up shit Fuck shit don't fuck around with fake shit Hell you're movin like the Matrix Don't run baby come take this Damn damn Hoe in the club Hope these niggas don't trip Cause they ain't gon have no lip I'm just gon empty the clip I got plenty to give This that up shit Herm G what's up bitch Money is the subject Came up from hustlin Say time I'm roaming Early in the morning Phone key ringin goddamn I'ma need more grounds Niggas be hatin goddamn Like I pull up in a Lamborghini Masked up they ain't gon see me Blacked up with a black beanie Watch these niggas these niggas scheming Smoke good yeah niggas steaming Y'all broke y'all niggas dreaming Money spent on true religion No cause these niggas walking Same niggas that be stunting Like they getting money Social media fronting Like they getting money Social media fronting Get that up shit uh Close caption no subject Beat your ass in public Money is my subject just stay up shit Damn Uh damn just that up shit",
    },
  ],
}

export default function RapArtistLanding() {
  const [currentAlbum, setCurrentAlbum] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate album carousel
    const interval = setInterval(() => {
      setCurrentAlbum((prev) => (prev + 1) % artistData.discography.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleSpotifyPlay = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[url('/smoky-urban-lights.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>

        <div
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h1 className="font-manrope font-bold text-6xl md:text-8xl lg:text-9xl mb-4 text-shadow-glow">
            <span className="text-accent animate-glow">{artistData.artist.name}</span>
          </h1>
          <p className="font-manrope text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground">
            {artistData.artist.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/80 text-accent-foreground font-manrope font-semibold px-8 py-3 animate-glow"
              onClick={() => handleSpotifyPlay(artistData.featuredSong.spotifyId)}
            >
              <Play className="mr-2 h-5 w-5" />
              Play Latest Track
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-white hover:text-white font-manrope font-semibold px-8 py-3 bg-transparent"
              onClick={() => window.open("https://www.amazon.com/dp/B0F7HZXST9/ref=sr_1_7?crid=1ZSM2YUNJPE2R&dib=eyJ2IjoiMSJ9.wUuxIzG9F_eYI7XjIlAqRx6yRwfOjCsFgKos6qHh7Goe7AVnYwB1QZZI64S-YaOBFXqSDq2b3_8rIW2MXO4wzxNP_oanW0wRkig3TCicrxFz47QjmTSR3R9e9ONsio1QehVSEuZSQ-6dDnS1j9bFPErwlVEjnsXLgbUk_ZN3vpf-lx10CNUqndDSGxw8lBrv7pVUdZ9bLMThcEhza0BgKSBbPlu7nnVkYtiScHh4bhzZFU5kWIBxYr5zBxaneSwmRB8tQQ2thOV08Frn2-EBjc1mSTY0UhaS7HJmO6o5qQw.Y6IwfnLP_ocajqRbfPfTVW1APcdm6TINa2udBlMF66Q&dib_tag=se&keywords=dnt+t-rex&qid=1755824039&sprefix=dnt+t-rex%2Caps%2C119&sr=8-7", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5 hover:text-white " />
              Amazon Music
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
        <div
          className="absolute bottom-32 right-16 w-6 h-6 bg-accent/50 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-3 h-3 bg-accent/70 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Featured Song Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-manrope font-bold text-4xl md:text-5xl text-center mb-16 text-accent">Featured Track</h2>
          <Card className="bg-card border-accent/20 overflow-hidden animate-fade-in-up">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src={artistData.featuredSong.coverArt || "/placeholder.svg"}
                    alt={artistData.featuredSong.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="font-manrope font-bold text-3xl mb-2">{artistData.featuredSong.title}</h3>
                  <p className="text-muted-foreground mb-2">
                    {artistData.featuredSong.album} • {artistData.featuredSong.duration}
                  </p>
                  <p className="text-foreground mb-6">{artistData.featuredSong.description}</p>
                  <div className="flex gap-4">
                    <Button className="bg-accent hover:bg-accent/80 text-accent-foreground" onClick={() => handleSpotifyPlay(artistData.featuredSong.appleMusicUrl)}>
                      <Play className="mr-2 h-4 w-4" />
                      Play on Apple Music
                    </Button>
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-white hover:text-white bg-transparent"
                      onClick={() => window.open("https://www.amazon.com/dp/B0F7HZXST9/ref=sr_1_7?crid=1ZSM2YUNJPE2R&dib=eyJ2IjoiMSJ9.wUuxIzG9F_eYI7XjIlAqRx6yRwfOjCsFgKos6qHh7Goe7AVnYwB1QZZI64S-YaOBFXqSDq2b3_8rIW2MXO4wzxNP_oanW0wRkig3TCicrxFz47QjmTSR3R9e9ONsio1QehVSEuZSQ-6dDnS1j9bFPErwlVEjnsXLgbUk_ZN3vpf-lx10CNUqndDSGxw8lBrv7pVUdZ9bLMThcEhza0BgKSBbPlu7nnVkYtiScHh4bhzZFU5kWIBxYr5zBxaneSwmRB8tQQ2thOV08Frn2-EBjc1mSTY0UhaS7HJmO6o5qQw.Y6IwfnLP_ocajqRbfPfTVW1APcdm6TINa2udBlMF66Q&dib_tag=se&keywords=dnt+t-rex&qid=1755824039&sprefix=dnt+t-rex%2Caps%2C119&sr=8-7", "_blank")}
                    >
                      <Music className="mr-2 h-4 w-4  hover:text-white " />
                      Amazon Music
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Discography Carousel */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-manrope font-bold text-4xl md:text-5xl text-center mb-16 text-accent">Discography</h2>
          <div className="relative">
            <div className="flex justify-center">
              <div className="relative w-80 h-[28rem] mx-auto">
                {artistData.discography.map((album, index) => (
                  <Card
                    key={index}
                    className={`absolute inset-0 bg-card border-accent/20 transition-all duration-700 cursor-pointer ${
                      index === currentAlbum
                        ? "z-20 scale-100 rotate-0 opacity-100"
                        : index === (currentAlbum + 1) % artistData.discography.length
                          ? "z-10 scale-90 rotate-6 opacity-70 translate-x-8"
                          : "z-0 scale-75 rotate-12 opacity-40 translate-x-16"
                    }`}
                    onClick={() => setCurrentAlbum(index)}
                  >
                    <CardContent className="p-0 h-full flex flex-col">
                      <img
                        src={album.coverArt || "/placeholder.svg"}
                        alt={album.title}
                        className="w-full h-64 object-cover rounded-t-lg flex-shrink-0"
                      />
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-manrope font-bold text-lg mb-1">{album.title}</h3>
                          <p className="text-muted-foreground mb-1 text-sm">
                            {album.year} • {album.type}
                          </p>
                          <p className="text-xs text-muted-foreground mb-3">{album.tracks} tracks</p>
                        </div>
                        <Button
                          size="sm"
                          className="w-full bg-accent hover:bg-accent/80 text-accent-foreground"
                          onClick={() => handleSpotifyPlay(album.spotifyUrl)}
                        >
                          <Play className="mr-2 h-3 w-3" />
                          Listen Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {artistData.discography.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentAlbum ? "bg-accent" : "bg-muted"}`}
                  onClick={() => setCurrentAlbum(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics Snippets */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-manrope font-bold text-4xl md:text-5xl text-center mb-16 text-accent">Lyrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artistData.lyricsSnippets.map((lyric, index) => (
              <Card
                key={index}
                className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-manrope font-bold text-xl mb-4 text-accent">{lyric.song}</h3>
                  <blockquote className="text-foreground italic leading-relaxed">"{lyric.snippet}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-bold text-4xl md:text-5xl mb-8 text-accent">About DNT T-Rex</h2>
          <p className="text-lg leading-relaxed mb-8 text-foreground">{artistData.artist.bio}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-muted-foreground">
            <span>{artistData.artist.location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{artistData.artist.yearsActive}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-manrope font-bold text-2xl mb-6 text-accent">Follow DNT T-Rex</h3>
          <div className="flex justify-center gap-6 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=100083022412601", "_blank")}
              className="border-accent text-accent hover:bg-accent/20 hover:border-accent/60 bg-transparent"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("https://www.tiktok.com/@dnttrex", "_blank")}
              className="border-accent text-accent hover:bg-accent/20 hover:border-accent/60 bg-transparent"
            >
              <svg width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="currentColor" fill="none">
                <path d="M52.46,26.64c-1.15.25-4.74.65-9.7-2.41a.5.5,0,0,0-.77.42s0,10,0,13.33c0,2.68.15,20.4-17.16,18.42,0,0-13.68-1-13.68-16.33,0,0,.19-13.8,16.42-15a.51.51,0,0,1,.55.5V32.6a.48.48,0,0,1-.42.49c-1.9.27-9.54,1.8-8.69,8.77a7.19,7.19,0,0,0,7.37,6.3s7,.78,7.32-9V7.94a.51.51,0,0,1,.5-.5h6.88a.5.5,0,0,1,.49.41c.36,2,2.42,9.82,10.8,10.31a.5.5,0,0,1,.48.49v7.51A.48.48,0,0,1,52.46,26.64Z" strokeLinecap="round"/>
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("https://www.youtube.com/channel/UCANIo1OYLYI9c9gvtpitu3w", "_blank")}
              className="border-accent text-accent hover:bg-accent/20 hover:border-accent/60 bg-transparent"
            >
              <Youtube className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("https://music.apple.com/us/artist/dnt-t-rex/1625192505", "_blank")}
              className="border-accent text-accent hover:bg-accent/20 hover:border-accent/60 bg-transparent"
            >
              <Music className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-muted-foreground">© 2025 DNT T-Rex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
