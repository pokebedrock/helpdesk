<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: '',
    name: 'Smell of curry',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/smell-of-curry' },
      { icon: 'x', link: 'https://x.com/@smell_of_curry' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCbtRgldllSHEG7CnVp_04DQ' }
    ]
  },
  {
    avatar: '',
    name: 'Medal',
    title: 'Manager',
    links: [
        { icon: 'youtube', link: 'https://www.youtube.com/channel/UCvnrHTl-yjznV9nbF75y9-Q' }
    ]
  },
  {
    avatar: '',
    name: 'ReallyFatYoshi',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/smell-of-curry' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCbtRgldllSHEG7CnVp_04DQ' }
    ]
  },
  {
    avatar: '',
    name: 'Bloody',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/smell-of-curry' },
    ]
  },
  {
    avatar: '',
    name: 'e1lloᵕ̈',
    title: 'Admin',
    links: [
      { icon: 'x', link: 'http://www.twitter.com/e1llo__' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development team that makes Pokébedrock run and thrive.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
