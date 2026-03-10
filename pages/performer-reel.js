import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function getYoutubeVideoId(url) {
  if (!url || url.includes('YOUR_VIDEO_ID_')) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.replace('/', '') || null;
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      const watchId = parsedUrl.searchParams.get('v');
      if (watchId) return watchId;

      const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
      if (pathParts[0] === 'shorts' && pathParts[1]) return pathParts[1];
      if (pathParts[0] === 'embed' && pathParts[1]) return pathParts[1];
    }
  } catch {
    return null;
  }

  return null;
}

function getYoutubeEmbedUrl(url) {
  const videoId = getYoutubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

function getVimeoVideoId(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);
    if (!parsedUrl.hostname.includes('vimeo.com')) return null;

    const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    return /^\d+$/.test(lastPart) ? lastPart : null;
  } catch {
    return null;
  }
}

function getVimeoEmbedUrl(url) {
  const videoId = getVimeoVideoId(url);
  return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
}

function getEmbedData(url) {
  const youtubeEmbedUrl = getYoutubeEmbedUrl(url);
  if (youtubeEmbedUrl) {
    return { embedUrl: youtubeEmbedUrl, platformLabel: 'YouTube' };
  }

  const vimeoEmbedUrl = getVimeoEmbedUrl(url);
  if (vimeoEmbedUrl) {
    return { embedUrl: vimeoEmbedUrl, platformLabel: 'Vimeo' };
  }

  return { embedUrl: null, platformLabel: 'Video Platform' };
}

function getWatchLabel(video, platformLabel) {
  if (video.type === 'channel') return 'Visit Channel';
  return `Watch on ${platformLabel}`;
}

const performanceVideos = [
  {
    title: 'The Solitary Dancer',
    url: 'https://youtu.be/lt8T7sSISVw?si=lHJv2BU-vfoFIFM7',
  },
  {
    title: 'Bhargavi Sardesai and Avani Gadre - Duet',
    url: 'https://youtu.be/k3er2l7IjvE?si=RK8w1y8Dx7-m_1sI',
  },
  {
    title: 'Chotekhani Mehfil by Shuddhanaad',
    url: 'https://youtu.be/QWKj89WdjIE?si=3UQ4eCq4i-mNrWQ6',
  },
  {
    title: 'The Beethoven Festival - Bonn, German',
    url: 'https://youtu.be/zI2l4thfx5g?si=-mV5qZk1fqbswiRs',
  },
  {
    title: 'Well-Behaved Women',
    url: 'https://vimeo.com/reviews/12592aef-ec4c-4367-a12f-0f9c806103a1/videos/935911285',
  },
  {
    title: 'Bhargavi Sardesai Channel',
    description: 'Explore more performances and updates on my channel.',
    url: 'https://youtube.com/@bhargavisardesai6823?si=JzE1E8d9xAXPZ7k4',
    type: 'channel',
    thumbnail: '/Hero 4 copy.png',
  },
  
];

const performanceOrder = [0, 4, 1, 3, 2, 5];

export default function PerformerReelPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-28 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">PERFORMANCES</h1>
        <p className="text-[#E6F3F2] text-lg mb-10">Watch selected performance videos.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
          {performanceOrder.map((index) => performanceVideos[index]).map((video) => {
            const { embedUrl, platformLabel } = getEmbedData(video.url);

            return (
              <div
                key={video.title}
                className="rounded-2xl border border-white/15 bg-black/35 p-5 shadow-xl"
              >
                {video.type === 'channel' && video.thumbnail ? (
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block mb-4">
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} thumbnail`}
                      className="w-full aspect-video object-cover rounded-lg border border-white/10"
                    />
                  </a>
                ) : embedUrl ? (
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 border border-white/10">
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video rounded-lg mb-4 bg-white/5 border border-white/10 flex items-center justify-center text-sm text-[#E6F3F2]">
                    Add YouTube or Vimeo link to show video
                  </div>
                )}

                <h2 className="text-2xl font-semibold mb-2">{video.title}</h2>
                {video.description && <p className="text-[#E6F3F2] mb-4">{video.description}</p>}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold tracking-wide underline underline-offset-4"
                >
                  {getWatchLabel(video, platformLabel)}
                </a>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
