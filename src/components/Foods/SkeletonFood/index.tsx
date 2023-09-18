import { Skeleton } from '../../Skeleton'

import { Container } from './styles'

export function SkeletonFood() {
  return (
    <div className='skeleton-wrapper'>
      <Container>
        <Skeleton type='title' />
        <Skeleton type='thumbnail' />
        <Skeleton type='text' />
        
        <div>
          <Skeleton type='title' />
          <Skeleton type='image' />
        </div>
      </Container>
    </div>
  )
}
