import Cinnamon from '@apollosoftwarexyz/cinnamon';
import Database from '@apollosoftwarexyz/cinnamon-database';

export default (async () => {
    const framework = await Cinnamon.initialize({
        silenced: true,
        autostartServices: false,
    });

    const config = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...(framework.getModule<Database>(Database.prototype).ormConfig),
        migrations: {
            disableForeignKeys: false,
            emit: 'js'
        }
    };
    if (!config) process.exit(1);
    else return config;
})();
