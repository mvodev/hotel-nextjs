type TypeSection = {
  icon: 'comfort' | 'convenience' | 'coziness'
  title: string
  description: string
}

type TypeAboutRoomProps = {
  sections?: TypeSection[]
};

export type { TypeAboutRoomProps, TypeSection };
