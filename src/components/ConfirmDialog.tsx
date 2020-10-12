import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export interface IDialogProps {
	title: string,
	message: string,
	show: boolean,
	onConfirm?: () => void,
	onReject?: () => void
}

export const ConfirmDialog: React.FC<IDialogProps> = ({title, message, show, onConfirm, onReject}) => {
	const [open, setOpen] = React.useState(show)

	React.useEffect(() => {
		setOpen(show)
	}, [show])

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{message}
          		</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => {
						handleClose()
						onReject?.()
					}} color="primary">
						NÃO
					</Button>
					<Button onClick={() => {
						handleClose()
						onConfirm?.()
					}} color="primary" autoFocus>
						SIM
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
