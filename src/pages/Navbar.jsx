import {useRef} from 'react'
import '../styles/navbar.scss'

const Navbar = () => {
  const nav = useRef(0);
  return (
    <>
        <nav ref={nav}>
        <a className="logo-wrapper" href="#home">
            <svg className="logo" width="193" height="116" viewBox="0 0 193 116" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M72.9558 42.16C72.9024 42.2667 72.8358 42.4 72.7558 42.56C72.7024 42.6933 72.6358 42.8667 72.5558 43.08C72.3691 43.48 72.1558 43.96 71.9158 44.52C71.6758 45.0533 71.4091 45.64 71.1158 46.28C70.5558 47.5067 69.9291 48.84 69.2358 50.28C68.5691 51.72 67.9291 53.08 67.3158 54.36C67.4491 54.36 67.5558 54.3733 67.6358 54.4C67.7424 54.4 67.8491 54.4 67.9558 54.4C68.5958 54.4 69.1024 54.2933 69.4758 54.08C69.7958 53.92 70.0358 53.84 70.1958 53.84C70.4358 53.84 70.5558 53.9333 70.5558 54.12C70.5558 54.3067 70.3958 54.5067 70.0758 54.72C69.6758 54.96 69.1424 55.2133 68.4758 55.48C67.8091 55.72 67.1558 55.8267 66.5158 55.8C65.9024 57.1067 65.3158 58.32 64.7558 59.44C64.2225 60.5333 63.7158 61.7733 63.2358 63.16C62.8625 64.28 62.6758 65.08 62.6758 65.56C62.6758 65.8267 62.7425 66.04 62.8758 66.2C63.0091 66.3333 63.2624 66.4 63.6358 66.4C63.9825 66.4 64.3958 66.2933 64.8758 66.08C65.6225 65.76 66.3958 65.2533 67.1958 64.56C67.9958 63.8667 68.7558 63.1067 69.4758 62.28C70.1958 61.4533 70.7824 60.6933 71.2358 60C71.4758 59.6533 71.6891 59.48 71.8758 59.48C71.9824 59.48 72.0358 59.5467 72.0358 59.68C72.0358 59.8133 71.9291 60.0533 71.7158 60.4C71.2625 61.12 70.6491 61.92 69.8758 62.8C69.1291 63.6533 68.3291 64.44 67.4758 65.16C66.6225 65.88 65.7958 66.4133 64.9958 66.76C64.4091 67 63.8358 67.12 63.2758 67.12C61.5158 67.12 60.6358 66.2 60.6358 64.36C60.6358 63.6933 60.7558 62.9467 60.9958 62.12C61.3424 60.8667 61.7291 59.7333 62.1558 58.72C62.5824 57.7067 63.0891 56.6267 63.6758 55.48C62.8491 55.3733 62.0891 55.28 61.3958 55.2C60.7291 55.0933 59.9558 55.0267 59.0758 55C58.6758 55.5867 58.2624 56.2133 57.8358 56.88C57.4358 57.5467 57.0358 58.24 56.6358 58.96C55.0358 61.7867 53.3558 64.24 51.5958 66.32C49.8358 68.3733 47.9958 69.9733 46.0758 71.12C44.1824 72.2667 42.2091 72.84 40.1558 72.84C38.9291 72.84 37.7958 72.5467 36.7558 71.96C35.7158 71.4 34.8758 70.5867 34.2358 69.52C33.6224 68.48 33.3158 67.2267 33.3158 65.76C33.3158 65.12 33.3824 64.4533 33.5158 63.76C33.6491 63.04 33.8624 62.2933 34.1558 61.52C34.7424 60 35.5958 58.6267 36.7158 57.4C37.8624 56.1467 39.1291 55.16 40.5158 54.44C41.9024 53.6933 43.2491 53.32 44.5558 53.32C45.7291 53.32 46.7291 53.7067 47.5558 54.48C48.4091 55.2267 48.8358 56.3333 48.8358 57.8C48.8358 58.4933 48.7158 59.28 48.4758 60.16C47.9958 61.7867 47.3158 63.04 46.4358 63.92C45.5558 64.7733 44.6624 65.3733 43.7558 65.72C43.0891 65.96 42.4358 66.08 41.7958 66.08C41.3424 66.08 40.9424 66.0133 40.5958 65.88C40.2758 65.7467 40.0624 65.5467 39.9558 65.28C39.9291 65.2 39.9158 65.1067 39.9158 65C39.9158 64.7067 40.0358 64.56 40.2758 64.56C40.5158 64.56 40.6624 64.7067 40.7158 65C40.7424 65.08 40.8358 65.1733 40.9958 65.28C41.1824 65.36 41.4491 65.4 41.7958 65.4C42.0091 65.4 42.2358 65.3733 42.4758 65.32C42.7158 65.2667 42.9691 65.1867 43.2358 65.08C43.9291 64.7867 44.6358 64.2667 45.3558 63.52C46.1024 62.7467 46.6891 61.6267 47.1158 60.16C47.3824 59.28 47.5158 58.4533 47.5158 57.68C47.5158 56.4533 47.2091 55.5333 46.5958 54.92C45.9824 54.3067 45.2624 54 44.4358 54C43.1558 54 42.0224 54.3867 41.0358 55.16C40.0758 55.9333 39.2358 56.9333 38.5158 58.16C37.7958 59.36 37.1958 60.6133 36.7158 61.92C36.0491 63.7333 35.7158 65.3867 35.7158 66.88C35.7158 68.5067 36.1024 69.7867 36.8758 70.72C37.6491 71.6533 38.7691 72.12 40.2358 72.12C41.8091 72.12 43.3024 71.7467 44.7158 71C46.1558 70.2533 47.5291 69.24 48.8358 67.96C50.1424 66.68 51.3824 65.2267 52.5558 63.6C53.7291 61.9467 54.8491 60.2133 55.9158 58.4C56.2891 57.7867 56.6491 57.2 56.9958 56.64C57.3424 56.0533 57.6891 55.5067 58.0358 55C57.0758 55 56.1558 55.0667 55.2758 55.2C54.4224 55.3067 53.6624 55.5867 52.9958 56.04C52.3291 56.4667 51.7824 57.1733 51.3558 58.16C51.2758 58.2933 51.1824 58.44 51.0758 58.6C50.9958 58.7333 50.8891 58.8133 50.7558 58.84C50.7291 58.84 50.7024 58.8533 50.6758 58.88C50.6758 58.88 50.6624 58.88 50.6358 58.88C50.4491 58.88 50.3558 58.7733 50.3558 58.56C50.3558 58.5067 50.3824 58.4 50.4358 58.24C50.4891 58.08 50.5824 57.88 50.7158 57.64C51.7558 55.8533 53.0091 54.68 54.4758 54.12C55.9691 53.5333 57.5024 53.2533 59.0758 53.28C60.7291 50.88 62.2891 48.92 63.7558 47.4C65.2224 45.88 66.5558 44.6933 67.7558 43.84C68.9558 42.9867 69.9958 42.4 70.8758 42.08C71.7558 41.7333 72.4091 41.56 72.8358 41.56C72.9691 41.56 73.0358 41.6267 73.0358 41.76C73.0358 41.92 73.0091 42.0533 72.9558 42.16ZM71.0758 43.12C70.8358 43.12 70.5158 43.2133 70.1158 43.4C69.7424 43.5867 69.3824 43.8 69.0358 44.04C68.6891 44.2533 68.4358 44.4133 68.2758 44.52C67.2625 45.2667 66.0491 46.36 64.6358 47.8C63.2491 49.2133 61.7424 51.0667 60.1158 53.36C60.9958 53.3867 61.7558 53.4667 62.3958 53.6C63.0358 53.7067 63.7291 53.8267 64.4758 53.96C65.3024 52.36 66.1558 50.88 67.0358 49.52C67.9158 48.16 68.7158 46.9333 69.4358 45.84C70.1824 44.7467 70.7291 43.84 71.0758 43.12ZM75.7117 67.28C75.0451 67.28 74.5384 67.08 74.1917 66.68C73.8451 66.2533 73.6717 65.7067 73.6717 65.04C73.6717 64.7467 73.6984 64.4267 73.7517 64.08C73.8317 63.7067 73.9517 63.3467 74.1117 63C74.4051 62.3067 74.7384 61.6533 75.1117 61.04C75.5117 60.4 75.8717 59.7067 76.1917 58.96C76.3784 58.56 76.4717 58.2 76.4717 57.88C76.4717 57.48 76.3117 57.2133 75.9917 57.08C75.6717 56.92 75.2851 56.8267 74.8317 56.8C74.3784 56.7467 73.9517 56.68 73.5517 56.6C73.1251 57.8267 72.6184 58.92 72.0317 59.88C71.4717 60.84 70.7651 61.8 69.9117 62.76C69.6184 63.0533 69.4051 63.2 69.2717 63.2C69.1651 63.2 69.1117 63.1467 69.1117 63.04C69.1117 62.8533 69.2584 62.6 69.5517 62.28C70.1384 61.6133 70.6584 60.9067 71.1117 60.16C71.5917 59.3867 71.9784 58.6667 72.2717 58C72.5917 57.3333 72.7917 56.84 72.8717 56.52C72.2851 56.28 71.8184 55.8267 71.4717 55.16C71.1251 54.4667 70.9517 53.7867 70.9517 53.12C70.9517 52.32 71.1517 51.6667 71.5517 51.16C71.9517 50.6267 72.3651 50.36 72.7917 50.36C73.1651 50.36 73.4984 50.5733 73.7917 51C74.0851 51.4267 74.2317 52.1467 74.2317 53.16C74.2317 53.5867 74.1784 54.0267 74.0717 54.48C73.9651 54.9067 73.8717 55.2667 73.7917 55.56C74.1117 55.6133 74.4851 55.6533 74.9117 55.68C75.3384 55.68 75.6984 55.6933 75.9917 55.72C76.3384 55.72 76.6717 55.7333 76.9917 55.76C77.3384 55.7867 77.6451 55.84 77.9117 55.92C78.6317 56.1333 78.9917 56.5733 78.9917 57.24C78.9917 57.8267 78.7651 58.56 78.3117 59.44C77.9651 60.1867 77.5784 60.9333 77.1517 61.68C76.7251 62.4267 76.3651 63.1867 76.0717 63.96C75.9651 64.2267 75.8717 64.5067 75.7917 64.8C75.7384 65.0667 75.7117 65.3067 75.7117 65.52C75.7117 66.0533 75.9517 66.32 76.4317 66.32C76.6984 66.32 77.0451 66.24 77.4717 66.08C78.2184 65.76 78.9917 65.2533 79.7917 64.56C80.6184 63.8667 81.3917 63.1067 82.1117 62.28C82.8317 61.4533 83.4184 60.6933 83.8717 60C84.1117 59.6533 84.3251 59.48 84.5117 59.48C84.6184 59.48 84.6717 59.5467 84.6717 59.68C84.6717 59.8667 84.5651 60.1067 84.3517 60.4C83.8984 61.12 83.2851 61.92 82.5117 62.8C81.7651 63.6533 80.9651 64.4533 80.1117 65.2C79.2584 65.92 78.4317 66.4533 77.6317 66.8C76.8851 67.12 76.2451 67.28 75.7117 67.28ZM73.1117 55.44C73.1384 55.3333 73.1517 55.1467 73.1517 54.88C73.1517 54.6667 73.1384 54.44 73.1117 54.2C73.1117 53.9333 73.1117 53.6667 73.1117 53.4C73.1117 52.28 72.9651 51.7467 72.6717 51.8C72.5651 51.8267 72.4717 51.96 72.3917 52.2C72.3117 52.44 72.2717 52.72 72.2717 53.04C72.2717 53.4933 72.3384 53.96 72.4717 54.44C72.6317 54.92 72.8451 55.2533 73.1117 55.44ZM92.768 67.24C92.0213 67.24 91.488 66.9467 91.168 66.36C90.848 65.7733 90.688 65.0933 90.688 64.32C90.688 64.1867 90.688 64.04 90.688 63.88C90.688 63.72 90.7013 63.5733 90.728 63.44C90.2213 64.3467 89.568 65.2 88.768 66C87.968 66.8 86.9813 67.2 85.808 67.2C85.008 67.2 84.328 66.9067 83.768 66.32C83.2346 65.7333 82.968 64.84 82.968 63.64C82.968 62.68 83.2346 61.48 83.768 60.04C84.0613 59.3467 84.488 58.64 85.048 57.92C85.608 57.2 86.288 56.6 87.088 56.12C87.888 55.6133 88.7813 55.36 89.768 55.36C90.8346 55.36 91.5813 55.56 92.008 55.96C92.4346 56.36 92.7013 56.6667 92.808 56.88C92.808 56.9067 92.808 56.9333 92.808 56.96C92.8346 56.96 92.848 56.9733 92.848 57C92.848 57.24 92.7013 57.36 92.408 57.36C92.2746 57.36 92.1413 57.2933 92.008 57.16C91.688 56.7867 91.368 56.52 91.048 56.36C90.728 56.2 90.4213 56.12 90.128 56.12C89.5146 56.12 88.9413 56.3867 88.408 56.92C87.8746 57.4267 87.3946 58.04 86.968 58.76C86.568 59.4533 86.2346 60.1067 85.968 60.72C85.5946 61.5733 85.3146 62.3467 85.128 63.04C84.968 63.7067 84.888 64.2667 84.888 64.72C84.888 65.92 85.3013 66.52 86.128 66.52C86.7146 66.52 87.408 66.1467 88.208 65.4C89.008 64.6533 89.768 63.5467 90.488 62.08C91.128 60.8 91.7013 59.6667 92.208 58.68C92.7146 57.6667 93.1546 56.7867 93.528 56.04C93.608 55.8533 93.808 55.72 94.128 55.64C94.448 55.5333 94.768 55.48 95.088 55.48C95.3813 55.48 95.648 55.5333 95.888 55.64C96.128 55.72 96.248 55.8667 96.248 56.08C96.248 56.1867 96.1813 56.3333 96.048 56.52C95.728 56.9733 95.3146 57.64 94.808 58.52C94.328 59.4 93.8746 60.32 93.448 61.28C93.048 62.24 92.7813 63.0933 92.648 63.84C92.568 64.24 92.528 64.6 92.528 64.92C92.528 65.7733 92.8213 66.2 93.408 66.2C93.5946 66.2 93.888 66.1333 94.288 66C95.0346 65.68 95.7946 65.1867 96.568 64.52C97.368 63.8267 98.1146 63.0667 98.808 62.24C99.528 61.4133 100.128 60.64 100.608 59.92C100.848 59.5733 101.035 59.4 101.168 59.4C101.248 59.4 101.288 59.4667 101.288 59.6C101.288 59.8133 101.181 60.08 100.968 60.4C100.488 61.12 99.8746 61.92 99.128 62.8C98.408 63.68 97.6213 64.4933 96.768 65.24C95.9413 65.9867 95.128 66.5333 94.328 66.88C93.7413 67.12 93.2213 67.24 92.768 67.24ZM103.09 67.24C102.343 67.24 101.73 66.9867 101.25 66.48C100.77 65.9733 100.53 65.2667 100.53 64.36C100.53 63.5867 100.743 62.7333 101.17 61.8C101.356 61.4 101.53 60.9067 101.69 60.32C101.85 59.7333 102.01 59.2267 102.17 58.8C101.823 59.3067 101.463 59.8133 101.09 60.32C100.743 60.8267 100.356 61.32 99.9295 61.8C99.6895 62.0667 99.4762 62.2 99.2895 62.2C99.1829 62.2 99.1295 62.1467 99.1295 62.04C99.1295 61.9333 99.1962 61.8 99.3295 61.64C100.263 60.44 101.036 59.3333 101.65 58.32C102.263 57.3067 102.73 56.5467 103.05 56.04C103.263 55.6667 103.61 55.44 104.09 55.36C104.57 55.28 104.983 55.2533 105.33 55.28C105.436 55.28 105.556 55.2933 105.69 55.32C105.823 55.32 106.023 55.32 106.29 55.32C106.13 55.5867 105.85 56.12 105.45 56.92C105.05 57.72 104.623 58.64 104.17 59.68C103.716 60.6933 103.33 61.6933 103.01 62.68C102.69 63.6667 102.53 64.5067 102.53 65.2C102.53 65.5467 102.596 65.84 102.73 66.08C102.863 66.32 103.103 66.44 103.45 66.44C103.956 66.44 104.503 66.1867 105.09 65.68C105.676 65.1733 106.236 64.5333 106.77 63.76C107.33 62.96 107.77 62.1733 108.09 61.4C108.063 61.3467 108.036 61.1867 108.01 60.92C107.983 60.6267 107.97 60.2267 107.97 59.72C107.97 59.3467 107.983 58.9333 108.01 58.48C108.036 58.0267 108.09 57.5067 108.17 56.92C108.356 55.7467 108.73 54.8667 109.29 54.28C109.85 53.6667 110.276 53.36 110.57 53.36C110.89 53.36 111.116 53.48 111.25 53.72C111.383 53.96 111.45 54.2667 111.45 54.64C111.45 54.96 111.396 55.32 111.29 55.72C111.21 56.12 111.103 56.5467 110.97 57C110.676 57.8533 110.33 58.6933 109.93 59.52C109.556 60.32 109.303 60.8667 109.17 61.16C109.17 61.7467 109.263 62.24 109.45 62.64C109.663 63.04 109.996 63.24 110.45 63.24C110.983 63.24 111.49 63.0667 111.97 62.72C112.45 62.3467 112.876 61.92 113.25 61.44C113.65 60.9333 113.97 60.48 114.21 60.08C114.396 59.8133 114.57 59.68 114.73 59.68C114.836 59.68 114.89 59.76 114.89 59.92C114.89 60.1067 114.823 60.28 114.69 60.44C114.503 60.7333 114.25 61.0933 113.93 61.52C113.636 61.9467 113.316 62.36 112.97 62.76C112.65 63.1333 112.356 63.4133 112.09 63.6C111.45 64 110.876 64.2 110.37 64.2C109.89 64.2 109.476 64.0667 109.13 63.8C108.81 63.5067 108.57 63.1467 108.41 62.72C107.583 64.32 106.69 65.48 105.73 66.2C104.77 66.8933 103.89 67.24 103.09 67.24ZM119.4 54.04C119 54.04 118.693 53.9067 118.48 53.64C118.266 53.3733 118.16 53.0667 118.16 52.72C118.16 52.3467 118.293 52.04 118.56 51.8C118.853 51.56 119.16 51.44 119.48 51.44C119.88 51.44 120.2 51.5733 120.44 51.84C120.68 52.08 120.8 52.3733 120.8 52.72C120.8 53.0667 120.653 53.3733 120.36 53.64C120.066 53.9067 119.746 54.04 119.4 54.04ZM117.48 67.68C116.573 67.68 115.853 67.3467 115.32 66.68C114.786 65.9867 114.52 65.12 114.52 64.08C114.52 63.3333 114.653 62.5733 114.92 61.8C115.053 61.3733 115.213 60.88 115.4 60.32C115.586 59.7333 115.76 59.2267 115.92 58.8C115.573 59.3067 115.213 59.8133 114.84 60.32C114.493 60.8267 114.106 61.32 113.68 61.8C113.44 62.0667 113.213 62.2 113 62.2C112.893 62.2 112.84 62.1467 112.84 62.04C112.84 61.9333 112.906 61.8 113.04 61.64C113.973 60.44 114.746 59.3333 115.36 58.32C116 57.3067 116.48 56.5467 116.8 56.04C117.013 55.6667 117.36 55.44 117.84 55.36C118.32 55.28 118.733 55.2533 119.08 55.28C119.186 55.28 119.306 55.2933 119.44 55.32C119.573 55.32 119.773 55.32 120.04 55.32C119.88 55.64 119.626 56.1867 119.28 56.96C118.96 57.7067 118.626 58.52 118.28 59.4C117.933 60.2533 117.626 61.0133 117.36 61.68C117.12 62.2667 116.92 62.8533 116.76 63.44C116.626 64.0267 116.56 64.56 116.56 65.04C116.56 65.5467 116.653 65.96 116.84 66.28C117.026 66.6 117.32 66.76 117.72 66.76C118.253 66.76 118.866 66.5467 119.56 66.12C120.253 65.6933 120.946 65.16 121.64 64.52C122.36 63.88 123.013 63.2267 123.6 62.56C124.213 61.8667 124.693 61.2533 125.04 60.72C125.146 60.56 125.266 60.48 125.4 60.48C125.533 60.48 125.6 60.5867 125.6 60.8C125.6 60.96 125.546 61.1067 125.44 61.24C124.053 63.1333 122.706 64.68 121.4 65.88C120.12 67.08 118.813 67.68 117.48 67.68ZM123.369 67.64C124.035 66.1733 124.702 64.6667 125.369 63.12C126.035 61.5733 126.649 60.1333 127.209 58.8C126.862 59.3067 126.502 59.8133 126.129 60.32C125.782 60.8267 125.395 61.32 124.969 61.8C124.729 62.0667 124.515 62.2 124.329 62.2C124.222 62.2 124.169 62.1467 124.169 62.04C124.169 61.96 124.235 61.84 124.369 61.68C125.302 60.48 126.075 59.3733 126.689 58.36C127.302 57.32 127.769 56.5467 128.089 56.04C128.302 55.6667 128.569 55.4667 128.889 55.44C129.235 55.3867 129.529 55.36 129.769 55.36C129.875 55.36 130.062 55.3733 130.329 55.4C130.595 55.4 130.862 55.4 131.129 55.4C131.022 55.6133 130.809 55.9867 130.489 56.52C130.195 57.0533 129.875 57.6133 129.529 58.2C129.209 58.7867 128.942 59.32 128.729 59.8C129.102 59.3467 129.622 58.7067 130.289 57.88C130.982 57.0267 131.782 56.32 132.689 55.76C133.542 55.2533 134.315 55 135.009 55C136.155 55 136.729 55.6 136.729 56.8C136.729 57.12 136.675 57.48 136.569 57.88C136.462 58.28 136.289 58.7067 136.049 59.16C135.542 60.1467 134.995 61.1867 134.409 62.28C133.849 63.3467 133.435 64.3467 133.169 65.28C133.142 65.3867 133.115 65.48 133.089 65.56C133.089 65.64 133.089 65.72 133.089 65.8C133.089 66.28 133.329 66.52 133.809 66.52C134.075 66.52 134.382 66.44 134.729 66.28C135.475 65.96 136.275 65.4533 137.129 64.76C137.982 64.0667 138.782 63.3067 139.529 62.48C140.302 61.6533 140.915 60.8933 141.369 60.2C141.529 59.9333 141.689 59.8 141.849 59.8C141.982 59.8 142.049 59.8667 142.049 60C142.049 60.16 141.995 60.3067 141.889 60.44C141.409 61.16 140.782 61.9733 140.009 62.88C139.262 63.76 138.449 64.5867 137.569 65.36C136.715 66.1067 135.889 66.6533 135.089 67C134.529 67.2133 133.995 67.32 133.489 67.32C132.795 67.32 132.182 67.1467 131.649 66.8C131.142 66.4267 130.889 65.88 130.889 65.16C130.889 65.0533 130.889 64.9467 130.889 64.84C130.915 64.7067 130.942 64.5867 130.969 64.48C131.182 63.4933 131.609 62.48 132.249 61.44C132.889 60.3733 133.475 59.3467 134.009 58.36C134.302 57.7733 134.449 57.32 134.449 57C134.449 56.5733 134.235 56.36 133.809 56.36C133.622 56.36 133.409 56.4 133.169 56.48C132.929 56.56 132.675 56.7067 132.409 56.92C131.849 57.2933 131.262 57.8667 130.649 58.64C130.035 59.3867 129.409 60.3067 128.769 61.4C128.182 62.44 127.635 63.48 127.129 64.52C126.622 65.56 126.209 66.4267 125.889 67.12C125.489 67.12 125.022 67.1867 124.489 67.32C123.982 67.4533 123.609 67.56 123.369 67.64ZM151.386 67.28C150.479 67.28 149.733 66.96 149.146 66.32C148.586 65.6533 148.306 64.88 148.306 64C148.306 63.8667 148.306 63.7333 148.306 63.6C148.333 63.4667 148.359 63.3467 148.386 63.24C148.146 63.64 147.826 64.1333 147.426 64.72C147.053 65.3067 146.626 65.84 146.146 66.32C145.666 66.8 145.133 67.08 144.546 67.16C144.439 67.1867 144.333 67.2 144.226 67.2C144.119 67.2 144.026 67.2 143.946 67.2C142.853 67.2 142.039 66.8 141.506 66C140.999 65.1733 140.746 64.1867 140.746 63.04C140.746 62.16 140.879 61.2667 141.146 60.36C141.439 59.4267 141.853 58.5733 142.386 57.8C142.919 57 143.559 56.36 144.306 55.88C145.053 55.4 145.906 55.16 146.866 55.16C147.186 55.16 147.586 55.2267 148.066 55.36C148.546 55.4667 148.999 55.6 149.426 55.76C149.853 55.92 150.146 56.08 150.306 56.24C150.519 55.76 150.773 55.04 151.066 54.08C151.359 53.12 151.719 52.1467 152.146 51.16C152.413 50.5467 152.719 49.8667 153.066 49.12C153.439 48.3733 153.866 47.6533 154.346 46.96C154.826 46.24 155.373 45.6533 155.986 45.2C156.599 44.7467 157.306 44.52 158.106 44.52C158.693 44.52 159.186 44.68 159.586 45C159.986 45.32 160.186 45.8133 160.186 46.48C160.186 47.0667 159.986 47.7867 159.586 48.64C158.999 49.8933 158.133 51.4133 156.986 53.2C155.839 54.9867 154.133 56.9467 151.866 59.08C151.759 59.3733 151.599 59.8267 151.386 60.44C151.173 61.0267 150.973 61.68 150.786 62.4C150.626 63.12 150.546 63.7867 150.546 64.4C150.546 64.9333 150.626 65.36 150.786 65.68C150.973 66 151.253 66.16 151.626 66.16C151.759 66.16 151.893 66.1467 152.026 66.12C152.159 66.0933 152.319 66.04 152.506 65.96C153.253 65.64 154.026 65.1733 154.826 64.56C155.653 63.92 156.439 63.1867 157.186 62.36C157.959 61.5333 158.599 60.7067 159.106 59.88C159.213 59.6933 159.346 59.6 159.506 59.6C159.639 59.6 159.706 59.6933 159.706 59.88C159.706 59.9867 159.666 60.12 159.586 60.28C159.133 61 158.546 61.8133 157.826 62.72C157.106 63.6267 156.333 64.4667 155.506 65.24C154.706 65.9867 153.906 66.5333 153.106 66.88C152.546 67.1467 151.973 67.28 151.386 67.28ZM152.426 57.36C153.439 56.32 154.359 55.2267 155.186 54.08C156.039 52.9067 156.786 51.7733 157.426 50.68C158.066 49.56 158.559 48.6 158.906 47.8C159.039 47.56 159.119 47.3333 159.146 47.12C159.199 46.9067 159.226 46.72 159.226 46.56C159.226 45.8933 158.959 45.56 158.426 45.56C158.159 45.56 157.839 45.6933 157.466 45.96C157.119 46.2267 156.786 46.6667 156.466 47.28C155.639 48.7733 154.933 50.4 154.346 52.16C153.759 53.8933 153.119 55.6267 152.426 57.36ZM144.546 66.24C145.346 66.0533 146.066 65.4933 146.706 64.56C147.346 63.6 147.933 62.4533 148.466 61.12C148.999 59.7867 149.506 58.4667 149.986 57.16C149.853 57 149.666 56.8267 149.426 56.64C149.213 56.4533 148.906 56.3067 148.506 56.2C148.266 56.12 148.026 56.08 147.786 56.08C147.119 56.08 146.493 56.3733 145.906 56.96C145.319 57.5467 144.813 58.28 144.386 59.16C143.959 60.04 143.626 60.9467 143.386 61.88C143.146 62.7867 143.026 63.56 143.026 64.2C143.026 65.72 143.533 66.4 144.546 66.24Z" fill="white"/>
    <path d="M21 44C21 44 -24 147 21 104C66 61 92 104 92 104" stroke="#AFD3E2" strokeOpacity="0.75" strokeWidth="2"/>
    <path d="M172 71.4976C172 71.4976 217 -31.5024 172 11.4976C127 54.4976 101 11.4976 101 11.4976" stroke="#0077C0" strokeWidth="2"/>
            </svg>
        </a>
        <ul>
            <li className="close"><a href="#home">Home</a></li>
            <li className="close"><a href="#about">About</a></li>
            <li className="close"><a href="#achievements">Achievements</a></li>
            <li className="close"><a href="#services">Services</a></li>
            <li className="close"><a href="#experience">Experience</a></li>
            <li className="close"><a href="#work">Work</a></li>
            <li className="close"><a href="#contact">Contact Me</a></li>
        </ul>
        <svg onClick={()=>{nav.current.classList.toggle("open-nav")}}  className="close closebtn" width="50" height="116" viewBox="0 0 50 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="91" r="25" fill="#D9D9D9"/>
        <path d="M34.4821 78L24.5 87.9821L14.5179 78L12 80.5179L21.9821 90.5L12 100.482L14.5179 103L24.5 93.0179L34.4821 103L37 100.482L27.0179 90.5L37 80.5179L34.4821 78Z" fill="#0077C0"/>
        <path d="M18.3349 36.0429L15 39.3754L25 49.3754L35 39.3754L31.6651 36.0429L25 42.7103L18.3349 36.0429V36.0429ZM31.6651 13.3325L35 10L25 0L15 10L18.3349 13.3325L25 6.66745L31.6651 13.3325V13.3325Z" fill="#C7BEBE"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M25.0002 17.6172C26.8754 17.6172 28.6738 18.3621 29.9997 19.6881C31.3257 21.014 32.0706 22.8125 32.0706 24.6877C32.0706 26.5629 31.3257 28.3613 29.9997 29.6872C28.6738 31.0132 26.8754 31.7581 25.0002 31.7581C23.125 31.7581 21.3265 31.0132 20.0006 29.6872C18.6746 28.3613 17.9297 26.5629 17.9297 24.6877C17.9297 22.8125 18.6746 21.014 20.0006 19.6881C21.3265 18.3621 23.125 17.6172 25.0002 17.6172V17.6172ZM25.0002 22.3308C25.6252 22.3308 26.2247 22.5791 26.6667 23.0211C27.1087 23.4631 27.357 24.0626 27.357 24.6877C27.357 25.3127 27.1087 25.9122 26.6667 26.3542C26.2247 26.7962 25.6252 27.0445 25.0002 27.0445C24.3751 27.0445 23.7756 26.7962 23.3336 26.3542C22.8916 25.9122 22.6433 25.3127 22.6433 24.6877C22.6433 24.0626 22.8916 23.4631 23.3336 23.0211C23.7756 22.5791 24.3751 22.3308 25.0002 22.3308V22.3308Z" fill="#C7BEBE"/>
        </svg>
             
    </nav>
    <svg onClick={()=>{nav.current.classList.toggle("open-nav")}} className="menu" width="50" height="23" viewBox="0 0 50 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H30V5H0V0Z" fill="#0077C0"/>
        <path d="M0 9H40V14H0V9Z" fill="#0077C0"/>
        <path d="M0 18H50V23H0V18Z" fill="#0077C0"/>
    </svg>

</>
  )
}

export default Navbar