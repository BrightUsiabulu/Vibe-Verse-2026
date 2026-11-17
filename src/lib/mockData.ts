
export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  followers: number;
  following: number;
  likes: number;
  verified: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  likes: number;
  timestamp: string;
}

export interface Video {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  caption: string;
  videoUrl: string;
  likes: number;
  comments: number;
  shares: number;
  songName: string;
  timestamp: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    username: "vibemaster",
    name: "Vibe Master",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=1",
    followers: 1250000,
    following: 125,
    likes: 8500000,
    verified: true
  },
  {
    id: "2",
    username: "dancekween",
    name: "Dance Queen",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=2",
    followers: 950000,
    following: 200,
    likes: 6800000,
    verified: true
  },
  {
    id: "3",
    username: "musicproducer",
    name: "Music Producer",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=3",
    followers: 580000,
    following: 350,
    likes: 4200000,
    verified: true
  },
  {
    id: "4",
    username: "comedyking",
    name: "Comedy King",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=4",
    followers: 2100000,
    following: 89,
    likes: 15000000,
    verified: true
  },
  {
    id: "5",
    username: "fashionista",
    name: "Fashion Star",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=5",
    followers: 1700000,
    following: 235,
    likes: 9800000,
    verified: true
  }
];

export const mockVideos: Video[] = [
  {
    id: "v1",
    userId: "1",
    username: "vibemaster",
    userAvatar: "https://source.unsplash.com/100x100/?portrait&random=1",
    caption: "Check out this amazing sunset dance! #sunset #vibes",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-meditating-and-stretching-on-a-rooftop-4895-large.mp4",
    likes: 1250000,
    comments: 8500,
    shares: 23000,
    songName: "Sunset Feelings - Chill Beats",
    timestamp: "2h"
  },
  {
    id: "v2",
    userId: "2",
    username: "dancekween",
    userAvatar: "https://source.unsplash.com/100x100/?portrait&random=2",
    caption: "New dance routine! What do you think? #dance #newmoves",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-video-call-4808-large.mp4",
    likes: 950000,
    comments: 12300,
    shares: 18000,
    songName: "Move Your Body - Dance Hit 2023",
    timestamp: "5h"
  },
  {
    id: "v3",
    userId: "3",
    username: "musicproducer",
    userAvatar: "https://source.unsplash.com/100x100/?portrait&random=3",
    caption: "Just dropped my new beat! Full track in bio #music #producer",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-2533-large.mp4",
    likes: 580000,
    comments: 6500,
    shares: 9000,
    songName: "Epic Beat Drop - Original Sound",
    timestamp: "1d"
  },
  {
    id: "v4",
    userId: "4",
    username: "comedyking",
    userAvatar: "https://source.unsplash.com/100x100/?portrait&random=4",
    caption: "When the coffee hits too hard 😂 #comedy #coffee #funny",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1241-large.mp4",
    likes: 2100000,
    comments: 32000,
    shares: 125000,
    songName: "Funny Times - Comedy Mix",
    timestamp: "2d"
  },
  {
    id: "v5",
    userId: "5",
    username: "fashionista",
    userAvatar: "https://source.unsplash.com/100x100/?portrait&random=5",
    caption: "Summer outfit check! #fashion #summer #ootd",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    likes: 1700000,
    comments: 23500,
    shares: 45000,
    songName: "Fashion Week - Runway Hits",
    timestamp: "3d"
  }
];

export const mockComments: Comment[] = [
  {
    id: "c1",
    userId: "2",
    username: "dancekween",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=2",
    text: "This is amazing! Love the moves 😍",
    likes: 24500,
    timestamp: "2h"
  },
  {
    id: "c2",
    userId: "3",
    username: "musicproducer",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=3",
    text: "Great song choice! 🔥",
    likes: 18700,
    timestamp: "5h"
  },
  {
    id: "c3",
    userId: "4",
    username: "comedyking",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=4",
    text: "Haha this made my day 😂",
    likes: 35200,
    timestamp: "1d"
  },
  {
    id: "c4",
    userId: "5",
    username: "fashionista",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=5",
    text: "Your outfit is on point! Where did you get that top?",
    likes: 12800,
    timestamp: "2d"
  },
  {
    id: "c5",
    userId: "1",
    username: "vibemaster",
    avatar: "https://source.unsplash.com/100x100/?portrait&random=1",
    text: "Keep up the great content! Looking forward to more!",
    likes: 28900,
    timestamp: "3d"
  }
];

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
