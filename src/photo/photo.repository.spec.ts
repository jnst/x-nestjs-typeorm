import {Connection, createConnection, Repository} from 'typeorm';
import {Photo} from './photo.entity';

describe('PhotoRepository', () => {
  let connection: Connection;
  let photoRepository: Repository<Photo>;

  beforeAll(async () => {
    connection = await createConnection();
    photoRepository = connection.getRepository(Photo);

    const photo = photoRepository.create({
      name: 'name',
      description: 'description',
      filename: 'filename',
      views: 0,
      isPublished: false,
    });
    await photoRepository.save(photo);
  });

  afterAll(async () => await connection.close());

  describe('find', () => {
    it('should return array', async () => {
      const photos = await photoRepository.find();
      expect(photos.length).toBeGreaterThanOrEqual(1);
    });
  });
});
