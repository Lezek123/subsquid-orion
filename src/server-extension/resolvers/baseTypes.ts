import { Field, InputType, Int, ObjectType, registerEnumType } from 'type-graphql'

// We only need to define one field for each type, which matches with the autogenerated type's field

@ObjectType()
export class Channel {
  @Field(() => String, { nullable: false }) id!: string
}

@InputType()
export class ChannelWhereInput {
  @Field(() => String, { nullable: true }) id_eq?: string
}

export enum ChannelOrderByInput {
  id_ASC,
}
registerEnumType(ChannelOrderByInput, { name: 'ChannelOrderByInput' })

@ObjectType()
export class Video {
  @Field(() => String, { nullable: false }) id!: string
}

@InputType()
export class VideoWhereInput {
  @Field(() => String, { nullable: true }) id_eq?: string
}

@ObjectType()
export class VideoCategory {
  @Field(() => String, { nullable: false }) id!: string
}

@ObjectType()
export class VideoHero {
  @Field(() => String, { nullable: false }) id!: string
}

@ObjectType()
export class Membership {
  @Field(() => String, { nullable: false }) id!: string
}

export enum VideoOrderByInput {
  id_ASC,
}
registerEnumType(VideoOrderByInput, { name: 'VideoOrderByInput' })

@ObjectType()
export class VideosConnection {
  @Field(() => Int, { nullable: false }) totalCount!: number
}
