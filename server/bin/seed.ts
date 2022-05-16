import getDatabaseConfig from '../src/mikro-orm.config';
import { MikroORM } from '@mikro-orm/core';
import { ProductCategory } from '../src/models/ProductCategory';

// eslint-disable-next-line no-console
const log = console.log;
// eslint-disable-next-line no-console
const error = console.error;

(async () => {

    log('Connecting to database...');

    const databaseConfig = await getDatabaseConfig;
    const orm = await MikroORM.init(databaseConfig);
    const em = orm.em.fork();

    const categoryRepo = em.getRepository(ProductCategory);

    if (await categoryRepo.count() === 0) {
        log('Seeding categories...');
        categoryRepo.persist(new ProductCategory({ slug: 'books', name: 'Books', image: '/v0/images/categories/books.png' }));
        categoryRepo.persist(new ProductCategory({ slug: 'clothes', name: 'Clothes', image: '/v0/images/categories/clothes.png' }));
        categoryRepo.persist(new ProductCategory({ slug: 'technology', name: 'Technology', image: '/v0/images/categories/technology.png' }));
        await categoryRepo.flush();
    } else {
        error('Database is already seeded.');
    }

    await orm.close(true);

})();
