export async function getStaticProps(api: string) {
    const response: Response = await fetch(api);
    const receivedData = await response.json();
    return {
        props: {
            data: receivedData
        }
    }
}