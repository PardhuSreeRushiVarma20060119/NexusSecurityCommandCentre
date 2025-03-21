const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('adminsec123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@nsec.com' },
    update: {},
    create: {
      email: 'admin@nsec.com',
      name: 'Admin User',
      hashedPassword: adminPassword,
      role: 'admin',
      isAdmin: true,
    },
  });
  console.log({ admin });

  // Create normal users
  const normalUsers = [
    {
      email: 'pardhuvarma@nsec.com',
      name: 'Pardhu Varma',
      password: 'nspv1109',
    },
    {
      email: 'prishavarma@nsec.com',
      name: 'Prisha Varma',
      password: 'prishapardhu!123456',
    },
    {
      email: 'teshii@nsec.com',
      name: 'Teshii',
      password: 'teshikaredla0808',
    },
  ];

  for (const user of normalUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    const createdUser = await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        name: user.name,
        hashedPassword: hashedPassword,
        role: 'user',
        isAdmin: false,
      },
    });
    console.log({ createdUser });
  }

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 