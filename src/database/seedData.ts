import prisma from '../libs/prismaClient';

async function seedingData() {
  await prisma.user.createMany({
    data: [
      {
        email: 'john.doe@example.com',
        name: 'John Doe',
        password: 'johndoe123',
      },
      {
        email: 'jane.doe@example.com',
        name: 'Jane Doe',
        password: 'janedoe123',
      },
      {
        email: 'bob.smith@example.com',
        name: 'Bob Smith',
        password: 'bobsmith123',
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Apple iPhone 13',
        price: 999.0,
        description: 'A smartphone with 6GB of RAM and 128GB of storage',
      },
      {
        name: 'Samsung Galaxy S22',
        price: 1399.0,
        description: 'A smartphone with 8GB of RAM and 256GB of storage',
      },
      {
        name: 'Google Pixel 6 Pro',
        price: 899.0,
        description: 'A smartphone with 12GB of RAM and 512GB of storage',
      },
    ],
  });
}


seedingData()
  .catch((e) => {
    if (e.code !== 'P2002') {
      console.log('Data is already seeded');
    } else {
      console.error(e);
      process.exit(1);
    }
  })
  .finally(async () => {
    await prisma.$disconnect();
  });