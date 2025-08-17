# XanoApp - React TypeScript Project with Xano Integration

A modern, production-ready React application built with TypeScript, Vite, TailwindCSS 4, and shadcn/ui components. Features full authentication, protected routing, and optional real-time WebSocket connections powered by Xano backend.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, TailwindCSS 3
- **Beautiful UI**: shadcn/ui components with custom design system
- **Authentication**: JWT-based auth with protected routes
- **Real-time**: Optional WebSocket connections for live updates
- **Responsive**: Mobile-first design approach
- **Type-Safe**: Full TypeScript coverage
- **Production Ready**: Optimized build and deployment ready

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: TailwindCSS 4, shadcn/ui
- **Backend**: Xano (BaaS)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Context
- **Real-time**: WebSockets (optional)

## 📋 Prerequisites

Before running this project, make sure you have:

1. **Node.js** (v16 or higher)
2. **npm** or **yarn**
3. **Xano Account** and workspace set up

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo>
cd xano-app
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Xano Configuration
VITE_XANO_API_URL=https://your-workspace.xano.com/api:version
VITE_XANO_REALTIME_HASH=your-realtime-connection-hash

# Xano Project Settings
VITE_XANO_REALTIME_ENABLED=true
```

### 3. Xano Backend Setup

In your Xano workspace, create the following API endpoints:

#### Authentication Endpoints:
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration  
- `GET /auth/me` - Get current user (requires auth)

#### Required Database Tables:
- `users` table with fields: `id`, `email`, `password`, `name`, `created_at`, `realtimeid`

#### Realtime Channel Setup (Required for WebSocket functionality):

1. **Enable Realtime Channels**:
   - In your Xano workspace, go to Settings → Realtime
   - Enable "Nested Channels" option

2. **Configure Channel Name**:
   - Create a realtime channel with a descriptive name (e.g., `user-updates`)
   - This channel will be used for user-specific realtime communications
   - The default name on this boiler plate is "dashboard" you can change over it on DashboardPage.tsx

3. **Update Users Table**:
   - Add a new field `realtimeid` to your `users` table
   - Field type: `uuid`
   - This field will store a unique identifier for each user's realtime connection

4. **Modify auth/signup Endpoint**:
   - Update your `POST /auth/signup` endpoint to generate a random `realtimeid` value
   - This can be a UUID, random string, or any unique identifier
   - Save this value to the user record during registration

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your application.

## 🔧 Configuration

### Xano Integration

The project uses `@xano/js-sdk` for backend communication. Configuration is handled in `src/lib/xano.ts`:

```typescript
// Enable/disable realtime features
VITE_XANO_REALTIME_ENABLED=true  // or false

// Your Xano workspace API URL
VITE_XANO_API_URL=https://your-workspace.xano.com/api:version

// Realtime connection hash (optional, only if realtime is enabled)
VITE_XANO_REALTIME_HASH=your-connection-hash
```

### Real-time Features

Real-time functionality is **optional** and can be toggled:

- Set `VITE_XANO_REALTIME_ENABLED=true` to enable WebSocket connections
- Set `VITE_XANO_REALTIME_ENABLED=false` to disable real-time features
- Requires `VITE_XANO_REALTIME_HASH` when enabled
- Uses user-specific connections with `realtimeid` for personalized real-time updates
- Each user gets their own real-time channel based on their unique `realtimeid`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   └── ProtectedRoute.tsx
├── contexts/            # React contexts
│   └── AuthContext.tsx
├── lib/                 # Utilities and configurations
│   ├── utils.ts
│   └── xano.ts         # Xano SDK configuration
├── pages/              # Page components
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   └── DashboardPage.tsx
└── App.tsx             # Main app component
```

## 🔒 Authentication

The app includes a complete authentication system:

- **Login/Register**: Email and password authentication
- **Protected Routes**: Dashboard requires authentication
- **JWT Tokens**: Automatic token management
- **Auth Context**: Global authentication state
- **Auto-redirect**: Seamless navigation based on auth status

## 🎨 Styling

Uses a single CSS file approach with:
- **TailwindCSS 3**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components  
- **Custom Design System**: Consistent colors, spacing, and typography
- **Dark Mode Ready**: CSS variables for easy theming
- **Responsive Design**: Mobile-first approach
- **Changing Theme color**: You can open (https://ui.shadcn.com/themes#themes) and copy the code to paste in the index.css file line 5-60

## 🌐 Real-time Features

Optional WebSocket integration provides:
- **Live Updates**: Real-time data synchronization
- **User-Specific Channels**: Each user has their own real-time channel via `realtimeid`
- **Activity Feed**: Live activity monitoring
- **Connection Status**: Visual connection indicators
- **Subscription Management**: Easy subscribe/unsubscribe
- **Personalized Updates**: Real-time notifications and data updates specific to each user

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in your hosting platform
4. Configure redirects for React Router (if needed)

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Adding New Components

Use shadcn/ui CLI to add components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or run into issues:

1. Check the [Xano Documentation](https://docs.xano.com)
2. Review the [React Router Documentation](https://reactrouter.com)
3. Check [shadcn/ui Documentation](https://ui.shadcn.com)

## 🙏 Acknowledgements

- [Xano](https://xano.com) - Backend as a Service
- [shadcn/ui](https://ui.shadcn.com) - UI Component Library
- [TailwindCSS](https://tailwindcss.com) - CSS Framework
- [Lucide](https://lucide.dev) - Icon Library
