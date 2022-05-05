type GithubRepositoryType = {
  name: string,
  html_url: string,
  description: string,
  homepage: string,
}

type RepositoryType = {
  name: string,
  description: string,
  languages: Array<string>,
  links: Array<{ name: string, url: string, }>,
}

const isJSON = (value: string): boolean => {
  try {
    const json = JSON.parse(value)
    return json && (typeof json === 'object')
  } catch (e) {
    return false
  }
}

const getGithubData = async (): Promise<Array<RepositoryType>> => {
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Authorization', `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_GITHUB_USER || ''}:${process.env.NEXT_PUBLIC_GITHUB_PASS || ''}`, 'utf8').toString('base64')}`)

  const repositories = await fetch(process.env.NEXT_PUBLIC_GITHUB_URL || '', {
    method: 'GET',
    headers,
  }).then((response) => response.json() as Promise<Array<GithubRepositoryType>>)

  const parsed = (Array.isArray(repositories) ? repositories : []).map(async ({ name, html_url, description, homepage, }): Promise<RepositoryType> => {
    const portfolio = await fetch(`https://raw.githubusercontent.com/diegorlb/${name}/main/.portfolio`, {
      method: 'GET',
      headers,
    }).then((response) => response.text() as Promise<string>)

    let languages: Array<string> = []
    if (isJSON(portfolio)) {
      const { tech, } = JSON.parse(portfolio) as { tech: Array<string>, }
      languages = tech || []
    }

    const links = []
    if (html_url?.length > 0) links.push({ name: 'Repository', url: html_url, })
    if (homepage?.length > 0) links.push({ name: 'Webpage', url: homepage, })

    return {
      name,
      description: description || 'No description :(',
      languages,
      links,
    }
  })

  return Promise.all(parsed)
}

export default getGithubData

export type {
  RepositoryType,
}