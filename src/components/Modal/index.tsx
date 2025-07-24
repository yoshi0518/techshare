import { Dialog, DialogContent, DialogTitle } from '@/components/Common';
import { cn } from '@/libs/utils';

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (opsn: boolean) => void;
  size?: 'sm' | 'md';
};

export const Modal = ({ children, open, onOpenChange, size = 'md' }: ModalProps) => (
  <Dialog
    open={open}
    onOpenChange={onOpenChange}
  >
    <DialogTitle />
    <DialogContent
      className={cn(
        'hide-scrollbar max-h-[85vh] w-11/12 overflow-y-auto rounded-lg border-none p-0',
        size === 'sm' ? 'sm:max-w-sm' : 'sm:max-w-lg',
      )}
    >
      {children}
    </DialogContent>
  </Dialog>
);
