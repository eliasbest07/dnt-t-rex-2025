"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink, Instagram, Youtube, Music, Video } from "lucide-react"

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
    album: "in loving memory",
    duration: "3:42",
    spotifyId: "https://open.spotify.com/intl-es/artist/3zMXNhpoTEA0OYBghRoZH5",
    amazonMusicUrl: "https://open.spotify.com/intl-es/artist/3zMXNhpoTEA0OYBghRoZH5",
    coverArt: "/T-Rex.webp",
    description: "A hard-hitting track about late-night ambitions and street dreams",
  },
  discography: [
    {
      title: "Urban Chronicles",
      year: "2023",
      type: "Album",
      tracks: 12,
      coverArt: "/hip-hop-album-cover.png",
      spotifyUrl: "https://open.spotify.com/intl-es/artist/3zMXNhpoTEA0OYBghRoZH5",
    },
    {
      title: "Street Visions EP",
      year: "2022",
      type: "EP",
      tracks: 6,
      coverArt: "/placeholder-1510r.png",
      spotifyUrl: "https://open.spotify.com/album/example2",
    },
    {
      title: "Rise Up",
      year: "2021",
      type: "Single",
      tracks: 1,
      coverArt: "/urban-neon-single.png",
      spotifyUrl: "https://open.spotify.com/track/example3",
    },
  ],
  lyricsSnippets: [
    {
      song: "Cowboy",
      snippet:
        " Country it's time to settle up like I'm about to ride on my horse I'm a goddamn cowboy I don't need no car I ride on my I'm a godamn cowboy I really like my 40 but I might give it up I'm a goddamn Cowboy I'm from New Orleans I'm a do but I still like the cowboy stay stra that's how you got to be so white I'm a goddamn Cowboy ride around the city like I'm ride around on my uhhuh I'm a goddamn cowboy you going run up get done... " },
    {
      song: "Street Visions",
      snippet:
        "Walking through the concrete jungle every day / Making moves in my own unique way / Stories written in the walls around me / This is where my heart will always be",
    },
    {
      song: "Rise Up",
      snippet:
        "They said I'd never make it past the block / Now I'm standing here solid as a rock / Every setback was a setup for success / Now I'm blessed and I'm giving nothing less",
    },
    {
      song: "Urban Dreams",
      snippet:
        "Microphone check, one two, here I go / Spitting fire with that lyrical flow / From the underground to the mainstream scene / Living out my wildest urban dreams",
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
                    <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                      <Play className="mr-2 h-4 w-4" />
                      Play on Spotify
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
              <div className="relative w-80 h-96 mx-auto">
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
                        className="w-full h-40 object-cover rounded-t-lg flex-shrink-0"
                      />
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-manrope font-bold text-lg mb-1">{album.title}</h3>
                        <p className="text-muted-foreground mb-1 text-sm">
                          {album.year} • {album.type}
                        </p>
                        <p className="text-xs text-muted-foreground mb-3 flex-1">{album.tracks} tracks</p>
                        <Button
                          size="sm"
                          className="w-full bg-accent hover:bg-accent/80 text-accent-foreground mt-auto"
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
              className="border-accent text-accent hover:bg-accent/20 hover:border-accent/60 bg-transparent"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-accent text-accent hover:bg-accent/20 hover:border-accent/60 bg-transparent"
            >
              <Video className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-accent text-accent hover:bg-accent/20 hover:border-accent/60 bg-transparent"
            >
              <Youtube className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
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
