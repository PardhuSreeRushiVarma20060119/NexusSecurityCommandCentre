# Nexus Security Platform

In an era where digital security threats are increasingly sophisticated and pervasive, Nexus Security stands as a cutting-edge web-based security management platform that empowers organizations and security professionals with comprehensive threat detection and management capabilities. Built on Next.js 14.1.0 and leveraging modern web technologies, Nexus Security combines advanced malware scanning through VirusTotal integration, network security analysis with port scanning and WHOIS lookup capabilities, and real-time system health monitoring to create a robust security ecosystem. The platform's intuitive, glassmorphic interface features an immersive dashboard that delivers real-time security metrics, threat alerts, and system performance data through interactive visualizations powered by Tremor and Recharts. At its core, Nexus Security implements a sophisticated role-based access control system, distinguishing between administrative users with full system access and standard users with restricted permissions, ensuring secure and controlled access to sensitive security features. The platform's comprehensive security suite includes malware scanning with hash analysis, network vulnerability assessment, SSL certificate validation, and detailed security logging with severity-based classification. For administrators, Nexus Security provides powerful tools for user management, system configuration, and database administration through Prisma Studio integration. The application's architecture is built on a robust foundation of TypeScript, PostgreSQL, and Prisma ORM, ensuring type safety, data integrity, and efficient database operations. With its modular component structure, real-time monitoring capabilities, and comprehensive security features, Nexus Security creates a centralized hub for vulnerability assessment, threat detection, and security management, making it an indispensable tool for modern cybersecurity operations.

![Nexus Security Platform](public/2.png)

## Features

### 🛡️ OSINT Tools
- **WHOIS Lookup**: Comprehensive domain information gathering
- **Social Media Search**: Find social media profiles across multiple platforms
- **CVE Database Search**: Search for known vulnerabilities
- **Real-time Results**: Instant feedback and detailed reports

### 📊 System Monitoring
- **Health Dashboard**: Real-time system metrics
- **Resource Usage**: CPU, Memory, Disk, and Network monitoring
- **Performance Analytics**: Historical data and trends
- **Alert System**: Proactive notifications for system issues

### 👥 User Management
- **Role-based Access**: Admin and user roles
- **Activity Tracking**: User action logging
- **Session Management**: Secure authentication
- **Profile Management**: User settings and preferences

### 🔒 Security Features
- **Event Logging**: Comprehensive security event tracking
- **Audit Trail**: Detailed activity history
- **Access Control**: Protected routes and resources
- **Real-time Alerts**: Security incident notifications

## Tech Stack

- **Frontend**:
  - Next.js 14 (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - Lucide Icons
  - Recharts
  - Sonner (Toast notifications)

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL
  - NextAuth.js
  - Axios

- **Development**:
  - ESLint
  - Prettier
  - TypeScript
  - Git

## Prerequisites

- Node.js 18.x or later
- PostgreSQL 14.x or later
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nexus-security-platform.git
cd nexus-security-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/nexus"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
nexus/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── admin/             # Admin dashboard pages
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   └── osint/             # OSINT tool pages
│   ├── components/            # React components
│   │   ├── osint/            # OSINT-specific components
│   │   ├── security/         # Security-related components
│   │   └── ui/               # Reusable UI components
│   ├── lib/                   # Utility functions and services
│   │   ├── prisma.ts         # Prisma client
│   │   └── services/         # Business logic services
│   └── types/                # TypeScript type definitions
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── styles/                   # Global styles
```

## API Documentation

### OSINT Endpoints

#### WHOIS Lookup
```http
GET /api/osint/whois?domain=example.com
```

#### Social Media Search
```http
GET /api/osint/sherlock?username=example
```

#### CVE Search
```http
GET /api/osint/cve?search=apache
```

### Admin Endpoints

#### System Health
```http
GET /api/admin/system/health
```

#### User Management
```http
GET /api/admin/users
PUT /api/admin/users/:id
DELETE /api/admin/users/:id
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security

- All routes are protected with authentication
- Admin routes require additional authorization
- Sensitive data is encrypted
- Regular security audits are performed
- Rate limiting is implemented on API routes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Support

For support, email support@nexussecurity.com or join our Slack channel.

## Roadmap

- [ ] Add more OSINT tools
- [ ] Implement real-time collaboration
- [ ] Add custom report generation
- [ ] Enhance system monitoring capabilities
- [ ] Add API key management
- [ ] Implement team workspaces

## Screenshots

[Add screenshots of key features here]

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.
