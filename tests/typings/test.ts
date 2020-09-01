import SauceLabs from 'saucelabs'

const api = new SauceLabs({
    region: 'eu',
    user: 'foo',
    key: 'foobar',
    proxy: 'barfoo',
    headless: false
});

async function foobar () {
    const job = await api.getJobV1_1('foobar')
    console.log(job.selenium_version)

    const sc = await api.startSauceConnect({
        scVersion: '4.5.4',
        tunnelIdentifier: '1234',
        logger: (output: string) => console.log(output)
    })
    sc.cp.pid
    await sc.close()

    await api.downloadJobAsset( 'job_id', 'video.mp4')
    await api.downloadJobAsset( 'job_id', 'video.mp4', './video.mp4')

    api.username.slice(1, 1)
    api.region.slice(1, 1)
    api.tld.slice(1, 1)
    api.headless.valueOf()
    api.webdriverEndpoint.slice(1, 1)
}
