import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box"
import {Container} from "@mui/material";
import './styles.css'

export default function TitlebarImageList() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClickOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <div>
            <ImageList
                style={{ gap: '1rem', padding: '2rem' }}
                sx={{
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr) !important',
                        md: 'repeat(2, 1fr) !important',
                    },
                }}
            >
                {itemData.map((item) => (
                    <ImageListItem
                        key={item.img}
                        sx={{ borderRadius: '10px', cursor: 'pointer' }}
                        onClick={() => handleClickOpen(item)}
                    >
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 20px 0 rgba(0,0,0,1)',
                            }}
                        />
                        <ImageListItemBar
                            sx={{ borderRadius: '0 0 10px 10px' }}
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth >
                <DialogContent className="scrollable-container">
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ position: 'absolute', top: 8, right: 20 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedItem && (
                        <div >
                            <Typography variant="h4" component="h2">
                                {selectedItem.title}
                            </Typography>
                            <Box>
                                <Box className="scrollable-container" sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: {
                                                xs: 'repeat(1, 1fr)', // 1
                                                md: 'repeat(2, 1fr)', // 2
                                            },
                                            gap: 2,
                                            width: '100%',
                                        }}
                                    >
                                        {selectedItem.blog.img.map((img, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    borderRadius: '8px',
                                                    overflow: 'hidden', // Asegura que el contenido no se desborde
                                                }}
                                            >
                                                <img
                                                    srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    src={`${img}?w=248&fit=crop&auto=format`}
                                                    alt={`Blog Image ${index}`}
                                                    loading="lazy"
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <Container>
                                        {selectedItem.blog.paragraph.map((paragraph, index) => (
                                            <Typography key={index} variant="body1" component="p" style={{ marginTop: '1rem' }}>
                                                {paragraph}
                                            </Typography>
                                        ))}
                                </Container>
                            </Box>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

const itemData = [
    {
        img: 'https://maestriasydiplomadostec.blob.core.windows.net/maestriasydiplomados/uploads/parea/imagen/69/AreaTematica-Finanzas.png',
        title: 'Soluciones Financieras',
        blog: {
            img: [
                "https://maestriasydiplomadostec.blob.core.windows.net/maestriasydiplomados/uploads/parea/imagen/69/AreaTematica-Finanzas.png",
                "https://maestriasydiplomadostec.blob.core.windows.net/maestriasydiplomados/uploads/parea/imagen/69/AreaTematica-Finanzas.png",
                "https://maestriasydiplomadostec.blob.core.windows.net/maestriasydiplomados/uploads/parea/imagen/69/AreaTematica-Finanzas.png",
                "https://maestriasydiplomadostec.blob.core.windows.net/maestriasydiplomados/uploads/parea/imagen/69/AreaTematica-Finanzas.png",
            ],
            paragraph: [
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed architecto et consequuntur itaque? Earum qui odit nisi in quis eius architecto sunt recusandae, deserunt maxime vitae incidunt consectetur voluptates voluptas!Accusamus, totam deleniti? Esse alias illum maxime reprehenderit nihil. Quod in quas recusandae, distinctio nisi architecto quaerat consequuntur iure eius qui ipsam fuga saepe aut deserunt, aliquam, quibusdam nam cum. Ut totam reprehenderit tempore optio debitis beatae, labore ducimus harum sunt sapiente vero ipsam molestiae corporis quibusdam. Iure provident soluta voluptate ad at accusantium neque aut cupiditate eos iste. Fugit.Saepe ipsum, odio voluptatum hic aliquam maiores eveniet dolores? Dicta id quasi delectus sint harum. Impedit enim dolore ea quasi saepe, veritatis mollitia eveniet omnis officia distinctio, autem repudiandae voluptatem? Illum est maiores atque animi fugit commodi optio quaerat porro recusandae cum? Earum expedita praesentium magni aliquid dolorum deserunt illum quibusdam sit fuga eius eligendi unde, a ducimus sint ex?"
            ]
        },
    },
    {
        img: 'https://cms.ar-racking.com/uploads/2021/03/STOCK-2023.jpg',
        title: 'Stock y Ventas',
        blog: {
            img: [
                'https://cms.ar-racking.com/uploads/2021/03/STOCK-2023.jpg',
                'https://cms.ar-racking.com/uploads/2021/03/STOCK-2023.jpg',
                'https://cms.ar-racking.com/uploads/2021/03/STOCK-2023.jpg',
                'https://cms.ar-racking.com/uploads/2021/03/STOCK-2023.jpg',
            ],
            paragraph: [
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed architecto et consequuntur itaque? Earum qui odit nisi in quis eius architecto sunt recusandae, deserunt maxime vitae incidunt consectetur voluptates voluptas!Accusamus, totam deleniti? Esse alias illum maxime reprehenderit nihil. Quod in quas recusandae, distinctio nisi architecto quaerat consequuntur iure eius qui ipsam fuga saepe aut deserunt, aliquam, quibusdam nam cum. Ut totam reprehenderit tempore optio debitis beatae, labore ducimus harum sunt sapiente vero ipsam molestiae corporis quibusdam. Iure provident soluta voluptate ad at accusantium neque aut cupiditate eos iste. Fugit.Saepe ipsum, odio voluptatum hic aliquam maiores eveniet dolores? Dicta id quasi delectus sint harum. Impedit enim dolore ea quasi saepe, veritatis mollitia eveniet omnis officia distinctio, autem repudiandae voluptatem? Illum est maiores atque animi fugit commodi optio quaerat porro recusandae cum? Earum expedita praesentium magni aliquid dolorum deserunt illum quibusdam sit fuga eius eligendi unde, a ducimus sint ex?"
            ]
        }
    },
    {
        img: 'https://storage.googleapis.com/twg-content/original_images/sustainability-thumbnail.original_8YExgdc.jpg',
        title: 'Reclamos, devoluciones y accionables',
        blog: {
            img: [
                'https://storage.googleapis.com/twg-content/original_images/sustainability-thumbnail.original_8YExgdc.jpg',
                'https://storage.googleapis.com/twg-content/original_images/sustainability-thumbnail.original_8YExgdc.jpg',
                'https://storage.googleapis.com/twg-content/original_images/sustainability-thumbnail.original_8YExgdc.jpg',
                'https://storage.googleapis.com/twg-content/original_images/sustainability-thumbnail.original_8YExgdc.jpg',
            ],
            paragraph: [
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed architecto et consequuntur itaque? Earum qui odit nisi in quis eius architecto sunt recusandae, deserunt maxime vitae incidunt consectetur voluptates voluptas!Accusamus, totam deleniti? Esse alias illum maxime reprehenderit nihil. Quod in quas recusandae, distinctio nisi architecto quaerat consequuntur iure eius qui ipsam fuga saepe aut deserunt, aliquam, quibusdam nam cum. Ut totam reprehenderit tempore optio debitis beatae, labore ducimus harum sunt sapiente vero ipsam molestiae corporis quibusdam. Iure provident soluta voluptate ad at accusantium neque aut cupiditate eos iste. Fugit.Saepe ipsum, odio voluptatum hic aliquam maiores eveniet dolores? Dicta id quasi delectus sint harum. Impedit enim dolore ea quasi saepe, veritatis mollitia eveniet omnis officia distinctio, autem repudiandae voluptatem? Illum est maiores atque animi fugit commodi optio quaerat porro recusandae cum? Earum expedita praesentium magni aliquid dolorum deserunt illum quibusdam sit fuga eius eligendi unde, a ducimus sint ex?"
            ]
        }
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-lYHf-SUhE6asBkOaPIJOEJUIlsdSwSqwtOmlTksVsdU0nke-p5pmf6PerAtohIU2bs&usqp=CAU',
        title: 'Proyecciones, competencia y sugerencias',
        blog: {
            img: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-lYHf-SUhE6asBkOaPIJOEJUIlsdSwSqwtOmlTksVsdU0nke-p5pmf6PerAtohIU2bs&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-lYHf-SUhE6asBkOaPIJOEJUIlsdSwSqwtOmlTksVsdU0nke-p5pmf6PerAtohIU2bs&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-lYHf-SUhE6asBkOaPIJOEJUIlsdSwSqwtOmlTksVsdU0nke-p5pmf6PerAtohIU2bs&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-lYHf-SUhE6asBkOaPIJOEJUIlsdSwSqwtOmlTksVsdU0nke-p5pmf6PerAtohIU2bs&usqp=CAU',
            ],
            paragraph: [
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed architecto et consequuntur itaque? Earum qui odit nisi in quis eius architecto sunt recusandae, deserunt maxime vitae incidunt consectetur voluptates voluptas!Accusamus, totam deleniti? Esse alias illum maxime reprehenderit nihil. Quod in quas recusandae, distinctio nisi architecto quaerat consequuntur iure eius qui ipsam fuga saepe aut deserunt, aliquam, quibusdam nam cum. Ut totam reprehenderit tempore optio debitis beatae, labore ducimus harum sunt sapiente vero ipsam molestiae corporis quibusdam. Iure provident soluta voluptate ad at accusantium neque aut cupiditate eos iste. Fugit.Saepe ipsum, odio voluptatum hic aliquam maiores eveniet dolores? Dicta id quasi delectus sint harum. Impedit enim dolore ea quasi saepe, veritatis mollitia eveniet omnis officia distinctio, autem repudiandae voluptatem? Illum est maiores atque animi fugit commodi optio quaerat porro recusandae cum? Earum expedita praesentium magni aliquid dolorum deserunt illum quibusdam sit fuga eius eligendi unde, a ducimus sint ex?"
            ]
        }
    },
];
