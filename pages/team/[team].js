import { getAllTeamMembers, getTeamMemberBySlug } from '../api/team'
import md2html from '../../lib/md2html'
import Page from '../../components/structure/page'
import SocialMediaButtons from '../../components/team/socialmedia'
import Markdown from '../../components/utils/markdown'
import Image from 'next/image'
import Link from 'next/link'

export default function TeamMember({ member }) {
  return (
    <Page description={member.description} title={member.name} >
      <article className='md:grid md:grid-cols-2'>
        <div className='rounded-md bg-neutral-900'>
          <Image className='rounded-t-md' data-fallback-image="/content/not-found.png" src={member.image} alt={`${member.name}`} layout="responsive" width={25} height={25} placeholder="blur" blurDataURL={member.image} />
          <div className='p-2 text-gray-300'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary text-lg xl:text-2xl font-semibold inline-block'>{member.name}</p>
            <p className='xl:text-lg'>{member.position}</p>
            <SocialMediaButtons socialMediaArray={member.socialmedia}/>
          </div>
        </div>
        <div className='md:ml-5'>
          <Markdown content={member.content} />
        </div>
      </article>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const member = getTeamMemberBySlug(params.team)
  const content = await md2html(member.content || '')

  return {
    props: {
      member: {
        ...member,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const members = getAllTeamMembers()
  return {
    paths: members.map((member) => {
      return {
        params: {
          team: member.slug,
        },
      }
    }),
    fallback: false,
  }
}