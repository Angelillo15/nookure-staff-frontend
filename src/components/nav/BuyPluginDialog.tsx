import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Platforms = [
  {
    name: 'BuiltByBit',
    url: 'https://builtbybit.com/resources/25460/',
  },
  {
    name: 'Polymart',
    url: 'https://polymart.org/resource/3051',
  },
  {
    name: 'SpigotMC',
    url: 'https://www.spigotmc.org/resources/105713/',
  },
] as { name: string; url: string }[];

const BuyPluginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>Buy Plugin</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buy the plugin</DialogTitle>
          <DialogDescription>
            <span className='flex max-w-full flex-col'>
              {Platforms.map((platform, index) => (
                <Button key={index} variant='secondary' className='mt-2' asChild>
                  <a href={platform.url} target='_blank'>{platform.name}</a>
                </Button>
              ))}
            </span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BuyPluginDialog;
